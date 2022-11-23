import React from 'react';
import { useFormik } from 'formik';
import { validateLoginForm } from '../utils/validation';

const Login = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: validateLoginForm(),
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
      {formik.touched.username && formik.errors.username && (
        <div>{formik.errors.username}</div>
      )}

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
