import React from "react";

function GameOverBanner({ status, answer, count }) {
  if (status === "won") {
    return (
      <>
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{count === 1 ? "1 guess" : `${count} guesses`}</strong>.
          </p>
        </div>
      </>
    );
  } else if (status === "lost") {
    return (
      <>
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      </>
    );
  }
}

export default GameOverBanner;
