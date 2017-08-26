import React, { Component } from "react";

class ShortCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: this.props.total,
      male: this.props.male,
      female: this.props.female
    };
  }

  render() {
    return (
      <div
        onClick = {this.props.onClick} // deferr action to parent
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: 'wrap',
          alignItems: "center",
          justifyContent: "space-between",
          border: '1px solid black',
          margin: '10px',
          padding: '10px'
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{fontSize: 'large', fontWeight: 'bold'}}>
            {this.props.name}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Total Population: </span>
            <span>
              {this.state.population}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Male Population: </span>
            <span>
              {this.state.male}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Female Population: </span>
            <span>
              {this.state.female}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortCountry;
