import jwt from 'jsonwebtoken';

import { ENV } from '../config/env.js';
import User from '../models/User.js';

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, ENV.JWT_SECRET, { expiresIn: '30d' });
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password..'
      });
    }

    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials..'
      });
    }

    const isPasswordValid = await User.verifyPassword(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials..'
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: 'Login Successfully..',
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password..'
      });
    }

    const existingUser = await User.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exist with this email..'
      });
    }

    await User.createUser({ name, email, password });
    res.status(201).json({
      success: true,
      message: 'User created successfully..'
    });
  } catch (error) {
    next(error);
  }
};
