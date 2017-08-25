import React, { Component } from 'react';
import WorldApi from './apiCalls';

class WorldPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: 0
    };
    this.worldApi = new WorldApi();
  }

  componentWillMount() {
    this.worldApi
      .getPopulationTodayFor('World')
      .then(fetchedPop => this.setState({ population: fetchedPop }));
  }

  render() {
    return (
      <div style={{ margin: '20px 40px', width: '30%' }}>
        <div>World Population</div>
        <div className="label">As of Today</div>
        <div className="label">
          {this.state.population}
        </div>
      </div>
    );
  }
}

export default WorldPop;
