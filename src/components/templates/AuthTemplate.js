import React from "react";
import PropTypes from "prop-types";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const AuthTemplate = ({ children }) => (
  <>
    <Header isAuthenticated={false} />
    <main>{children}</main>
    <Footer />
  </>
);

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
