import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const UserActions = () => (
    <nav>
      <span>{currentUser.username}</span>
      <Link className="btn btn-square red" to={'/messages'}>Messages</Link>
      <button className="btn btn-square blue" onClick={logout}>Sign Out</button>
    </nav>
  );
  return (
    <header>
      <section className="logo">
        <Link to={'/'}>
          <h1>GRILLED</h1>
        </Link>
      </section>
      <section id="menu">
        { currentUser === null ? 'High-End BBQ Marketplace' : UserActions() }
      </section>
    </header>

  );
};

Header.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
