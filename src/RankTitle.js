import React, { Component } from "react";

class RankTitle extends Component {
  getBackground(){
    if (this.props.buttonTitle === 'Fetch') {
      return 'blue';
    } else if (this.props.buttonTitle === 'Clear') {
      return 'red';
    }
  }

  render() {
    return (
      <div>
        <h2>Check Your Ranking</h2>
        <p>Enter your information to check where you rank</p>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <input type="text" value={this.props.dob} onChange={this.props.dobSetter} />
          <select value={this.props.gender} onChange={this.props.genderSetter}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <button className={this.getBackground()} onClick={this.props.clickHandler}>{this.props.buttonTitle}</button>
        </div>
      </div>
    );
  }
}

export default RankTitle;
