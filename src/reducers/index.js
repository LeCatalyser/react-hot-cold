import { GUESS_NUMBER, NEW_GAME } from "../actions";

const initalState = {
  guesses: [],
  feedback: "Make your guess!!!!",
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotColdReducer = (state = initalState, action) => {
  if (action.type === GUESS_NUMBER) {
    // 10
    const number = action.number;

    // 15
    const correctAnswer = state.correctAnswer;

    // 15 - 10 = 5
    const distance = Math.abs(correctAnswer - number);

    let feedback = "whatever feedback you want";
    if (distance === 0) {
      feedback = "you guessed it!";
    } else if (distance <= 5) {
      feedback = "hot";
    } else if (distance > 5) {
      feedback = "cold";
    }

    return {
      ...state,
      feedback: feedback,
      guesses: [...state.guesses, action.number]
    };
  }
  return state;
};
