import React from 'react';
import { connect } from 'react-redux';
import MainContent from './mainContainer.jsx';

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

const App = () =>
  (
    <div className="mainContainer">
      <MainContent />
    </div>
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
