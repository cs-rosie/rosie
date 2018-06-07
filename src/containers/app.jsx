import React from 'react';
import MainContent from './MainContainer.jsx';
import Header from './Header';

const App = () =>
  (
    <div className="mainContainer">
      <Header />
      <MainContent />
    </div>
  );

export default App;
