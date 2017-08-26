import React, { Component } from "react";
import WorldApi from "./apiCalls";
import ShortCountry from "./ShortCountry";

class ShortestCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.worldApi = new WorldApi();
    this.getShortestCountryNames = this.getShortestCountryNames.bind(this);
    this.getCountryInfo = this.getCountryInfo.bind(this);
  }

  getShortestCountryNames() {
    this.worldApi.getShortestCountryNames().then(countryList => {
      const shortestLength = countryList
        .map(countryName => countryName.length)
        .reduce((acc, length) => Math.min(acc, length));
      const shortestCountries = countryList.filter(
        countryName =>
          countryName.length === shortestLength && countryName !== "ASIA"
      );
      shortestCountries.sort(
        (country1, country2) => country1.length - country2.length
      );
      const shortestCountriesForState = {};
      shortestCountries.map(country => {
        shortestCountriesForState[country] = {
          population: 0,
          female: 0,
          male: 0
        };
        return null;
      });
      this.setState(shortestCountriesForState);
    });
  }

  getCountryInfo(name) {
    var self = this;
    this.worldApi.getPopulationThisYearFor(name).then(fetchedPop =>
      self.setState({
        [name]: {
          population: fetchedPop.total,
          female: fetchedPop.females,
          male: fetchedPop.males
        }
      })
    );
  }

  render() {
    const self = this;
    const totalPop = Object.keys(self.state)
      .map(country => self.state[country].population)
      .reduce((acc, countryPop) => acc + countryPop, 0);
    // CountriesBox could be its own Component. Fastest development as function
    function CountriesBox(props) {
      const countriesCount = props.countriesCount;
      if (countriesCount !== 0) {
        return (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span>Total population of countries:</span>
                <span>
                  {totalPop}
                </span>
              </div>
              <div>
                <span>Number of countries:</span>
                <span>
                  {Object.keys(self.state).length}
                </span>
              </div>
            </div>
            <div>
              {Object.keys(self.state).map((country, id) =>
                <ShortCountry
                  onClick={() => self.getCountryInfo(country)}
                  key={id}
                  name={country}
                  total={self.state[country].population}
                  female={self.state[country].female}
                  male={self.state[country].male}
                />
              )}
            </div>
          </div>
        );
      } else {
        return <button onClick={self.getShortestCountryNames}>Fetch</button>;
      }
    }
    return (
      <div>
        <h2>Shortest Country Names</h2>
        <p>Population of countries with shortest names</p>
        <CountriesBox countriesCount={Object.keys(this.state).length} />
      </div>
    );
  }
}

export default ShortestCountries;
