import React, { Component } from 'react';
import WorldApi from './apiCalls';
import ShortCountry from './ShortCountry';

class ShortestCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      number: 0,
    };
    this.worldApi = new WorldApi();
    this.getShortestCountryNames = this.getShortestCountryNames.bind(this);
  }

  getShortestCountryNames() {
    this.worldApi.getShortestCountryNames().then(countryList => {
      const shortestLength = countryList
        .map(countryName => countryName.length)
        .reduce((acc, length) => Math.min(acc, length));
      const shortestCountries = countryList.filter(
        countryName =>
          countryName.length === shortestLength && countryName !== 'ASIA'
      );
      shortestCountries.sort(
        (country1, country2) => country1.length - country2.length
      );
      this.setState({ countries: shortestCountries });
    });
  }

  render() {
    return (
      <div>
        <h2>Shortest Country Names</h2>
        <p>Population of countries with shortest names</p>
        <div>
          <span>Total population of countries</span>
          <span>4000</span>
          <span>Number of countries</span>
          <span>8</span>
        </div>
        <button onClick={this.getShortestCountryNames}>Fetch</button>
        <div>
          {this.state.countries.map((country, id) => <ShortCountry key={id} name={country} />)}
        </div>
      </div>
    );
  }
}

export default ShortestCountries;
