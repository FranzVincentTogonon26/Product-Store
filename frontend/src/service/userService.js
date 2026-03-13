import { API_PATHS } from '../utils/apiPath';

const syncUser = async (axiosAuth, user) => {
  try {
    const payload = {
      clerkId: user.id,
      email: user.primaryEmailAddress?.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
    };

    const response = await axiosAuth.post(API_PATHS.USER.SYN_USER, payload);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: 'An unknown error occurred',
      }
    );
  }
};

const userService = {
  syncUser,
};

export default userService;
