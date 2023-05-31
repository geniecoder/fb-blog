import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, placeholder, value, onChange, className }) => (
  <div className={className}>
    <label>{label}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
};

export default Input;
