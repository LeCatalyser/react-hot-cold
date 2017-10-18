//guessing numbers
export const GUESS_NUMBER = "GUESS_NUMBER";
export const guessNumber = number => ({
  type: GUESS_NUMBER,
  number
});

//starting a new game
export const NEW_GAME = "NEW_GAME";
export const newGame = () => ({
  type: NEW_GAME
});
