import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
