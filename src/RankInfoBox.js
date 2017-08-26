import React, { Component } from "react";

class RankInfoBox extends Component {
  render() {
    // Only render when rank requested
    if (this.props.rank === undefined) {
      return <div>Error fetching rank. Maybe wrong input?. Try again with YYYY-MM-DD format for date</div>;
    } else if (this.props.rank !== -1) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span>DOB: </span>
              <span>
                {this.props.dob}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span>Gender: </span>
              <span>
                {this.props.gender}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "large", fontWeight: "bold" }}>
              Your rank in the world
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span>You are ranked {this.props.rank}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RankInfoBox;
