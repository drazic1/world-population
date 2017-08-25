import React, { Component } from 'react';
import WorldApi from './apiCalls';
import RankInfoBox from './RankInfoBox';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: 0,
      dob: 0,
      gender: 'female'
    };
    this.worldApi = new WorldApi();
    this.getYourRanking = this.getYourRanking.bind(this);
    this.setDoB = this.setDoB.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  getYourRanking() {
    this.worldApi.getRankingFor(this.state.dob, this.state.gender).then(rank => {
      this.setState({ rank: rank });
    });
  }

  setDoB(event) {
    this.setState({ dob: event.target.value });
  }
  setGender(event) {
    this.setState({ gender: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Check Your Ranking</h2>
        <p>Enter your information to check where you rank</p>
        <div>
          <input onChange={this.setDoB} />
          <select onChange={this.setGender}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <button onClick={this.getYourRanking}>Fetch</button>
        <RankInfoBox
          dob={this.state.dob}
          rank={this.state.rank}
          gender={this.state.gender}
        />
      </div>
    );
  }
}

export default Ranking;
