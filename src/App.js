import React, { Component } from 'react';
import './App.css';
import FoundationLogo from './FoundationLogo';
import WorldPop from './WorldPop';
import UsaPop from './UsaPop';
import ShortestCountries from './ShortestCountries';
import Ranking from './Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <FoundationLogo />
        </div>
        <p className="App-intro" />
        <div className="container">
          {/* <TodaysPop />*/}
          <div
            style={{
              display: 'flex',
              margin: '20px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <WorldPop />
            <UsaPop />
          </div>
          <div>
            <ShortestCountries />
          </div>
          <div>
            <Ranking />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
