import { API_PATHS } from '../utils/apiPath';

const productList = async (axiosAuth) => {
  try {
    const response = await axiosAuth.get(API_PATHS.PRODUCT.LIST);
    return response.data.data.products;
  } catch (error) {
    throw (
      error.response?.data || {
        message: 'An unknown error occurred',
      }
    );
  }
};

export const productItem = () => {};

export const productAdd = async (axiosAuth, formData) => {
  try {
    const response = await axiosAuth.post(API_PATHS.PRODUCT.ADD, {
      ...formData,
    });
    return response.data.data.product;
  } catch (error) {
    throw error.response?.data || { message: 'An unknown error occur' };
  }
};

export const productUpdate = () => {};

export const productDelete = async (axiosAuth, id) => {
  try {
    const response = await axiosAuth.delete(API_PATHS.PRODUCT.DELETE(id));
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: 'An unknown error occurred',
      }
    );
  }
};

const productService = {
  productList,
  productItem,
  productAdd,
  productUpdate,
  productDelete,
};

export default productService;
