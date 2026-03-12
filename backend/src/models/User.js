import bcrypt from 'bcryptjs';
import db from '../config/db.js';

class User {
  // Create User
  static async createUser({ name, email, password }) {
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      `INSERT INTO users ( name, email, password_hash )
             VALUES ( $1, $2, $3 )`,
      [name, email, hashPassword]
    );
    return result.rows[0];
  }

  // Find user by email
  static async findUserByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }

  // Verify password
  static async verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export default User;
