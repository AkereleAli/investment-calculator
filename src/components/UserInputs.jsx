import React, { useState } from "react";
import Results from "./Results";
import UserInput from "./UserInput";

const UserInputs = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  let results = "";
  if (inputIsValid) {
    results = <Results input={userInput} />;
  } else {
    results = (
      <p className="center">Please enter a duration greater than zero.</p>
    );
  }

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput} />
      {/* {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />} */}
      {results}
    </>
  );
};

export default UserInputs;
