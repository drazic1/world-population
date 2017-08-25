import React, { Component } from 'react';
import WorldApi from './apiCalls';

class ShortCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: 0,
      male: 0,
      female: 0
    };
    this.worldApi = new WorldApi();
    this.getCountryInfo = this.getCountryInfo.bind(this);
  }

  getCountryInfo() {
    this.worldApi.getPopulationThisYearFor(this.props.name).then(fetchedPop =>
      this.setState({
        population: fetchedPop.total,
        female: fetchedPop.females,
        male: fetchedPop.males
      })
    );
  }

  render() {
    return (
      <div>
        <div>
          <p onClick={this.getCountryInfo}>
            {this.props.name}
          </p>
          <span>Total Population</span>
          <span>
            {this.state.population}
          </span>
        </div>
        <div>
          <span>Male Population</span>
          <span>
            {this.state.male}
          </span>
          <span>Female Population</span>
          <span>
            {this.state.female}
          </span>
        </div>
      </div>
    );
  }
}

export default ShortCountry;
