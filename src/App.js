import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ItemContainer from './components/ItemContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ItemContainer />
    </div>
  );
}

export default App;
