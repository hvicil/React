import React, { useRef, useState } from "react";

const Useref = () => {
  const inputRef = useRef();
  const [ph, setPh] = useState("Hi");

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder={ph} ref={inputRef} />
      <button onClick={handleFocus}>Click to focus</button>
    </div>
  );
};

export default Useref;
