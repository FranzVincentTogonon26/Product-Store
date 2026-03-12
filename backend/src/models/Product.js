import db from '../config/db.js';

class Product {
  //  Add or Create a product
  static async createProduct(data = {}) {
    const { name, image, price } = data;
    const result = await db.query(
      `INSERT INTO products ( name, price, image )
             VALUES ( $1, $2, $3 ) RETURNING *`,
      [name, price, image]
    );
    return result.rows[0];
  }

  // Get all products
  static async getAllProducts() {
    const result = await db.query(`SELECT * FROM products ORDER BY created_at DESC`);
    return result.rows;
  }

  // Get products
  static async getProduct(id) {
    const result = await db.query(` SELECT * FROM products WHERE id = $1`, [id]);
    return result.rows;
  }

  // Update Products
  static async updateProduct(id, data) {
    const { name, image, price } = data;
    const result = await db.query(
      `UPDATE products SET name = $2, price = $3, image = $4 WHERE id = $1 RETURNING * `,
      [id, name, price, image]
    );
    return result.rows[0];
  }

  // delete product
  static async deleteProduct(id) {
    const result = await db.query('DELETE FROM products WHERE id = $1 RETURNING * ', [id]);
    return result.rows[0];
  }
}

export default Product;
