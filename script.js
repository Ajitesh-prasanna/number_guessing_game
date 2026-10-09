// NUMBER GUESSING GAME

const min = -10000;
const max = 10000;
const maxGuesses = 3;

let state = {
  min,
  max,
  winningNum: getRandomNum(min, max),
  guessesLeft: maxGuesses,
};

console.log(`Winning number: ${state.winningNum}`);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
  state = {
    min,
    max,
    winningNum: getRandomNum(min, max),
    guessesLeft: maxGuesses,
  };

  console.log(`New winning number: ${state.winningNum}`);
  return { ...state };
}

function checkGuess(guess) {
  const numericGuess = Number(guess);

  if (!Number.isInteger(numericGuess)) {
    return {
      correct: false,
      message: "Please enter a valid integer.",
      guessesLeft: state.guessesLeft,
      gameOver: false,
    };
  }

  if (numericGuess === state.winningNum) {
    const result = {
      correct: true,
      message: "🎉 You guessed the correct number!",
      guessesLeft: state.guessesLeft,
      gameOver: true,
    };

    console.log(result.message);
    return result;
  }

  state.guessesLeft -= 1;

  if (state.guessesLeft <= 0) {
    const result = {
      correct: false,
      message: `❌ Out of guesses! The number was ${state.winningNum}.`,
      guessesLeft: 0,
      gameOver: true,
    };

    console.log(result.message);
    return result;
  }

  const hint = numericGuess < state.winningNum ? "too low" : "too high";
  const result = {
    correct: false,
    message: `❌ Incorrect. Your guess is ${hint}. ${state.guessesLeft} guess${state.guessesLeft === 1 ? "" : "es"} left.`,
    guessesLeft: state.guessesLeft,
    gameOver: false,
  };

  console.log(result.message);
  return result;
}

export { getRandomNum, checkGuess, resetGame, maxGuesses };