import React, { Component } from "react";
import { ClockStyled } from "./ClockStyled";

class ClockComponent extends Component {
 state = {
  time: new Date().toLocaleTimeString(),
  intervalTime: null,
 };

 componentDidMount() {
  this.intervalTime = setInterval(
   () => this.setState({ time: new Date().toLocaleTimeString() }),
   1000
  );
 }

 render() {
  return <ClockStyled className="clockC">{this.state.time}</ClockStyled>;
 }
}

export default ClockComponent;
