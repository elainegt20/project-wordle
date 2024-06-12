import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]); //here I save all of the user inputs

  const [gameStatus, setGameStatus] = React.useState("running");

  function handleGuessList(input) {
    //this track the user and make an object out of it
    //the reason why is to create a unique id for each so i dont run into the key warning
    const newGuess = {
      id: Math.random(),
      word: input,
    };
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);

    if (newGuess.word === answer) {
      setGameStatus("won");
    }
    if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      {/* <Guess guessList={guessList} /> */}
      <Form handleGuessList={handleGuessList} gameStatus={gameStatus} />
      {/* <GameOverBanner
        status={gameStatus}
        answer={answer}
        count={guessList.length}
      /> */}
      {gameStatus === "won" && <WonBanner count={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
