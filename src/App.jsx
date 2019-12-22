import React from 'react';
import './styles/App.scss';
import { NavBar } from './cmps/Nav-Bar'
import Router from './Router'

function App() {
  return (
    <div className="App">
      <NavBar />
        <Router/>
    </div>
  );
}

export default App;
