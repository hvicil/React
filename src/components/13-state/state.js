import React, { useState } from "react";
import { Button } from "reactstrap";

const State = () => {
  const [mode, setMode] = useState("light");
  console.log(mode);

  const handleMode = () => {
    setMode("light");
  
  };

  return (
    <div
      className={`p-5 d-flex justify-content-around  ${
        mode === "dark" ? "bg-dark text-light":""
      }`}
    >
      Hello Mode
      <Button onClick={() => setMode("dark")}>Dark Mode</Button>
      <Button onClick={setMode}>Light Mode</Button>
    </div>
  );
};

export default State;
