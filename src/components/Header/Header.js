import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => {
    this.setState((previousState) => ({
        isMenuOpen: !previousState.isMenuOpen}
    ))
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false});
  }
  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <h1 className="navbar-item">
              {siteTitle}
            </h1>
            <button
              className={`navbar-burger ${burgerClass}`}
              type="button"
              aria-label="menu"
              onClick={this.handleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div  className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              <Link
                to="/"
                onClick={this.closeMenu}
                className="navbar-item">
                Home
              </Link>
              <Link
                to="/projects"
                onClick={this.closeMenu}
                className="navbar-item">
                Projects
              </Link>
              <Link
                to="/articles"
                onClick={this.closeMenu}
                className="navbar-item">
                Articles
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
