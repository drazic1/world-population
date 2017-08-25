import React, { Component } from 'react';

class RankInfoBox extends Component {
  render() {
    return (
      <div>
        <div>
          <span>DOB</span>
          <span>
            {this.props.dob}
          </span>
          <span>Gender</span>
          <span>
            {this.props.gender}
          </span>
        </div>
        <div>
          <h3>Your rank in the world</h3>
          <span>
            You are ranked
          </span>
          <span>
            {this.props.rank}
          </span>
        </div>
      </div>
    );
  }
}

export default RankInfoBox;
