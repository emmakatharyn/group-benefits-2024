import React, { useState } from "react";
import StateEmployees from "../components/stateEmployees";
import LPBEmployees from "../components/LPBEmployees";

export default function Employees() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
  return (
    <div className='container p-0 text-center'>
      <h1 className='my-4 ps-2 display-5'>Employee Information Resources</h1>
      <p clasNames='ps-2'>Please select one:</p>
      <div className='select-one-box py-5 my-3'>
        <button
          className={`btn ${selectedOption === "state" ? "on" : ""}`}
          id='iAmStateEE'
          onClick={() => handleButtonClick("state")}
        >
          State Employees
        </button>

        <button
          className={`btn ${selectedOption === "lpb" ? "on" : ""}`}
          id='iAmLPBEE'
          onClick={() => handleButtonClick("lpb")}
        >
          LPB Employees
        </button>
      </div>

      <div>
        {selectedOption === "state" && <StateEmployees />}
        {selectedOption === "lpb" && <LPBEmployees />}
      </div>
    </div>
  );
}
