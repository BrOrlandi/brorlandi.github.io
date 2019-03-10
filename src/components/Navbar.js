import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Navbar = () => (
  <StaticQuery
    query={graphql`
            query TitleOnNavbar {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
    render={data => (
      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">{data.site.siteMetadata.title}</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/projects">Projetos</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li>
                <Link to="/dicas">Dicas</Link>
              </li> */}

              {/* Dropdown */}
              {/* <li class="dropdown navdrop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">
                    Categorias
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                {% for category in site.data.categories %}
                    <li><a href="{% link categories.html %}#{{ category | slugify }}">
                    {{category}}
                    </a></li>
                {% endfor %}
                </ul>
                </li>  */}
            </ul>
          </div>
        </div>
      </nav>
    )}
  />

);

export default Navbar;
