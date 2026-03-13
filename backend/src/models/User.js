import db from '../config/db.js';

class User {
  // Create User
  static async createUser({ clerkId, email, firstName, imageUrl }) {
    const result = await db.query(
      `INSERT INTO users ( clerkId, name, email, profileImage )
             VALUES ( $1, $2, $3, $4 )`,
      [clerkId, firstName, email, imageUrl]
    );
    return result.rows[0];
  }

  // Find user by email
  static async findUserByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }
}

export default User;
