import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <main>
      {children}
    </main>
  </div>
);

export default App;
