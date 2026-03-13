import User from '../models/User.js';

export const createUser = async (req, res, next) => {
  try {
    const { clerkId, email, firstName, imageUrl } = req.body;
    const existingUser = await User.findUserByEmail(email);

    if (!existingUser) {
      await User.createUser({ clerkId, email, firstName, imageUrl });
      return res.status(201).json({
        success: true,
        message: 'User created successfully..'
      });
    }
  } catch (error) {
    next(error);
  }
};
