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

export const productAdd = () => {};

export const productUpdate = () => {};

export const productDelete = () => {};

const productService = {
  productList,
  productItem,
  productAdd,
  productUpdate,
  productDelete,
};

export default productService;
