import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Feedback extends Component {

  render() {
    let message;
    let currentGuess = this.props.currentGuessIs;

    if (!currentGuess) {
      return null;
    }

    if (currentGuess === 'high') { message = "Nope. Lower" }
    else if (currentGuess === 'low') { message = "Nope. Higher" }
    else { message = "You got it!"; }
    
    return (
      <p>
        { message }
      </p>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentGuessIs: state.gameParams.currentGuessIs
  }
}
const FeedbackStore = connect(mapStateToProps)(Feedback);
export default FeedbackStore;