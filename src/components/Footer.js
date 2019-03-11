import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { OutboundLink } from 'gatsby-plugin-gtag';

library.add(fab, faCircle, faEnvelope);

const FooterIcon = ({ href, brandIcon, icon }) => (
  <li>
    <OutboundLink href={href} target="_blank">
      <span className="fa-layers fa-lg fa-stack">
        <FontAwesomeIcon
          icon="circle"
          size="2x"
        />
        <FontAwesomeIcon
          icon={brandIcon ? ['fab', brandIcon] : icon}
          inverse
          fixedWidth
        />
      </span>
    </OutboundLink>
  </li>
);

FooterIcon.propTypes = {
  href: PropTypes.string,
  brandIcon: PropTypes.string,
  icon: PropTypes.string,
};

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <ul className="list-inline text-center">
            <FooterIcon brandIcon="twitter" href="https://twitter.com/BrOrlandi" />
            <FooterIcon brandIcon="facebook" href="https://facebook.com/BrOrlandi" />
            <FooterIcon brandIcon="github" href="https://github.com/BrOrlandi" />
            <FooterIcon brandIcon="linkedin" href="https://linkedin.com/in/BrOrlandi" />
            <FooterIcon icon="envelope" href="mailto:brorlandi@gmail.com" />
          </ul>
          <p className="copyright text-muted">
            Copyright &copy; Bruno Orlandi
            {' '}
            {(new Date()).getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
