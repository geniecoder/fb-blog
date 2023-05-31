import React from 'react';
import PropTypes from 'prop-types';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const DefaultTemplate = ({ children, isAuthenticated }) => (
  <>
    <Header isAuthenticated={false} />
    <main>{children}</main>
    <Footer />
  </>
);

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default DefaultTemplate;
