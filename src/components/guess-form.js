import React from "react";

import "./guess-form.css";
import { connect } from "react-redux";

export class GuessForm extends React.Component {
  onGuess(event) {
    event.preventDefault();

    if (this.props.onGuess) {
      const value = this.input.value;
      this.props.onGuess(value);
    }
    this.input.value = "";
  }

  render() {
    return (
      <form onSubmit={e => this.onGuess(e)}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input
          type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder={Math.round(Math.random() * 100)}
          required
          ref={input => (this.input = input)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses.length,
  correctAnswer: state.correctAnswer
});
export default connect(mapStateToProps)(GuessForm);
