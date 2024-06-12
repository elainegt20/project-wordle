import React from "react";
import styles from "../../styles.css";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const myValue = value ? value.word : undefined;
  const result = checkGuess(myValue, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;

// Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.
// The Guess component should render 5 spans, each with the class of cell.
// Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
// Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
// No key warnings in the console.

// To keep track of the game status, I recommend creating a status variable that can hold 3 possible values: running, won, and lost.

// Then, we can conditionally render a banner based on this status. No banner for running, a win banner for won, and a lose banner for lost.

// You might wish to review the lesson on Conditional Rendering with &&.

// {/* iterate over range === [1,2,3,4,5,6] */}
// {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIndex) => (
//   //produce a row conttainer
//   <p key={rowIndex} className="guess">
//     {range(5).map((_, cellIndex) => (
//       //procude cell container or columns
//       <span key={cellIndex} className="cell">
//         {/* //if guessList[rowIndex] is exists then render the word if not cell is empty*/}
//         {/* guessList[rowIndex]-->word at current index; .word[cellIndex]-->letter at current index */}
//         {guessList[rowIndex] && guessList[rowIndex].word[cellIndex]}
//       </span>
//     ))}
//   </p>
// ))}
