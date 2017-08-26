import React, { Component } from 'react';
import WorldApi from './apiCalls';

class UsaPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: 0
    };
    this.worldApi = new WorldApi();
  }

  componentWillMount() {
    this.worldApi
      .getPopulationTodayFor('United States')
      .then(fetchedPop => this.setState({ population: fetchedPop }));
  }

  render() {
    return (
      <div style={{ margin: '20px 40px', width: '30%' }}>
        <div>USA Population</div>
        <div className="label" style={{display: "inline-block", padding: "3px 8px"}}>As of Today</div>
        <div className="label">
          {this.state.population}
        </div>
      </div>
    );
  }
}

export default UsaPop;
