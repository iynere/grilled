import React from 'react';

const Header = ({ currentUser, logout }) => {
  const UserActions = () => (
    <nav>
      <span>{currentUser.username}</span>
      <span className="header-action" onClick={logout}>Sign Out</span>
    </nav>
  );
  return (
    <header>
      <section className="logo">
        <h1 >GRILLED</h1>
      </section>
      <section>
        { currentUser === null ? "High-End BBQ Marketplace" : UserActions() }
      </section>
    </header>

  );
};



export default Header;
