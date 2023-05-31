import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;