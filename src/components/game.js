import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import { connect } from "react-redux";
import { guessNumber } from "../actions";

export class Game extends React.Component {
  newGame() {
    this.setState({
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  guess(guess) {
    guess = parseInt(guess, 10);
    this.props.dispatch(guessNumber(guess));
  }

  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection
          feedback={this.props.feedback}
          onGuess={guess => this.guess(guess)}
        />
        <GuessCount count={this.props.guesses.length} />
        <GuessList guesses={this.props.guesses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses
});

export default connect(mapStateToProps)(Game);
