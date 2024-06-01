import React, { Component } from 'react';
import walkGif from "./Walk.gif"
export class Walk extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={walkGif} alt="Walking GIF"></img>
      </div>
    )
  }
}

export default Walk
