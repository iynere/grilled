import React from 'react';

const Index = ({currentUser, errors, login, signup}) => {
  if (currentUser !== null) {
    return (
      <h1>yolo</h1>
    );
  }
  return (
    <h1>Hello</h1>
  );
};

export default Index;
