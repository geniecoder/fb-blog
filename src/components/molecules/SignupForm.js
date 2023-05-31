import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SignupForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Signup</Button>
    </form>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
