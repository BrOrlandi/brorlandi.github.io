import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';
import Page from './layouts/Page';
import Post from './layouts/Post';

const PAGE = 'page';
const POST = 'post';

const Layout = ({ model, ...props }) => (
  <>
    <Navbar />
    {model === PAGE
      && <Page {...props} />
    }
    {model === POST
      && <Post {...props} />
    }
    <Footer />
  </>
);

Layout.defaultProps = {
  model: PAGE,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  model: PropTypes.string,
};

export default Layout;
