import React, { Component } from "react";
import WorldApi from "./apiCalls";
import RankInfoBox from "./RankInfoBox";
import RankTitle from "./RankTitle";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: -1,
      dob: 0,
      gender: "female"
    };
    this.worldApi = new WorldApi();
    this.getYourRanking = this.getYourRanking.bind(this);
    this.clearBox = this.clearBox.bind(this);
    this.setDoB = this.setDoB.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  getYourRanking() {
    this.worldApi
      .getRankingFor(this.state.dob, this.state.gender)
      .then(rank => {
        this.setState({ rank: rank });
      });
  }

  clearBox() {
    this.setState({
      rank: -1,
      dob: 0,
      gender: "female"
    });
  }

  setDoB(event) {
    this.setState({ dob: event.target.value });
  }

  setGender(event) {
    this.setState({ gender: event.target.value });
  }

  render() {
    let title;
    let handleClick;
    if (this.state.rank === -1) {
      title = "Fetch";
      handleClick = this.getYourRanking;
    } else {
      title = "Clear";
      handleClick = this.clearBox;
    }
    return (
      <div>
        <RankTitle
          buttonTitle={title}
          clickHandler={handleClick}
          dobSetter={this.setDoB}
          genderSetter={this.setGender}
          gender={this.state.gender}
          dob={this.state.dob}
        />
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
