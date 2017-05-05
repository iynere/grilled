import React from 'react';

const Header = ({ currentUser, logout }) => {
  const UserActions = () => (
    <div>
      <span>{currentUser.username}</span>
      <span className="header-action" onClick={logout}>Sign Out</span>
    </div>
  );
  return (
    <header>
      <h5>GRILLED</h5>
      <div>
        { currentUser === null ? "High-End BBQ Marketplace" : UserActions() }
      </div>
    </header>

  );
};



export default Header;
