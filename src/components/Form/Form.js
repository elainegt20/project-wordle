import React from "react";

function Form({ handleGuessList, gameStatus }) {
  const [userInput, setUserInput] = React.useState("");

  function handleInputChange(event) {
    const newInput = event.target.value;
    const upperCaseInput = newInput.toUpperCase();
    setUserInput(upperCaseInput);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ guess: userInput });
    handleGuessList(userInput); //this is the function that is passed down from the parent component to keep track of all of the user inputs

    setUserInput("");
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5,5}"
          title="Username must be at least 5 characters long and can only contain letters"
          value={userInput}
          onChange={handleInputChange}
          disabled={gameStatus !== "running"}
        />
      </form>
    </>
  );
}

export default Form;

// Acceptance Criteria:

// Create a new component.
// Don't forget, you can use an NPM script to generate the scaffolding for you! We learn how to do this in the “Getting Started” video
// This component should render a <form> tag, including a label and a text input.
// The text input should be controlled by React state.
// When the form is submitted:
// The entered value should be logged to the console (for now).
// The input should be reset to an empty string.
// The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
// The input should have a minimum and maximum length of 5.
// NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
