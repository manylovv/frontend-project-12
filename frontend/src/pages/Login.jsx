import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required('No username provided')
        .min(4, 'Choose a username 4–20 characters long')
        .max(20, 'Choose a username 4–20 characters long'),
      password: yup
        .string()
        .required('No password provided')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">username:</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />

      <label htmlFor="password">password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <div>{formik.errors.password}</div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
