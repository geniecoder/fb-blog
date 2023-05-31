import React from 'react';
import PropTypes from 'prop-types';
import AuthTemplate from '../templates/AuthTemplate';
import LoginForm from '../molecules/LoginForm';

const LoginPage = ({ onLogin }) => (
  <AuthTemplate>
    <h1>Login</h1>
    <LoginForm onSubmit={onLogin} />
  </AuthTemplate>
);

export default LoginPage
 
