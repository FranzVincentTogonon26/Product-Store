import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import axiosInstance from '../utils/axiosInstance';

const useAxiosAuth = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      async (config) => {
        const token = await getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = '/';
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [getToken]);

  return axiosInstance;
};

export default useAxiosAuth;
