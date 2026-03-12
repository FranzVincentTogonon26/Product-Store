import Product from '../models/Product.js';

export const getAllProducts = async (_, res, next) => {
  try {
    const products = await Product.getAllProducts();
    res.status(200).json({
      success: true,
      data: { products }
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.getProduct(id);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Product not found..'
      });
    }

    res.status(200).json({
      success: true,
      data: { product }
    });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.createProduct(req.body);

    res.status(201).json({
      success: true,
      message: 'Product created..',
      data: { product }
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.updateProduct(id, req.body);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Product not found..'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated..',
      data: { product }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.deleteProduct(id);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'Product not found..'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted..'
    });
  } catch (error) {
    next(error);
  }
};
