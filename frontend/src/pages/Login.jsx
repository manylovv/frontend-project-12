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

  const renderError = (field) => {
    return (
      formik.touched[field] &&
      formik.errors[field] && (
        <div>
          <span className="error">{formik.errors[field]}</span>
        </div>
      )
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {renderError('username')}
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {renderError('password')}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
