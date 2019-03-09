/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import jquery from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/css/clean-blog.min.css';
import './src/css/syntax.css';


window.jQuery = jquery;
window.$ = jquery;

require('bootstrap/dist/js/bootstrap');
require('./src/js/clean-blog');
