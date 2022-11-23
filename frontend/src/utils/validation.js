import * as yup from 'yup';

export const validateLoginForm = () => {
  return yup.object({
    username: yup
      .string()
      .required('No username provided')
      .min(4, 'Must be at least 4 characters')
      .max(20, 'Must be at most 20 characters')
      .matches(
        /^[a-zA-Z0-9_-]+$/,
        'Must contain only letters, numbers, underscores, and dashes'
      ),
    password: yup
      .string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });
};
