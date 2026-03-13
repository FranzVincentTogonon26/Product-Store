export const BASE_URL = 'http://localhost:8000';

export const API_PATHS = {
  USER: {
    SYN_USER: '/api/user',
  },
  PRODUCT: {
    LIST: '/api/product',
    ADD: '/api/product',
    UPDATE: (id) => `/api/product/${id}`,
    DELETE: (id) => `/api/product/${id}`,
    ITEM: (id) => `/api/product/${id}`,
  },
};
