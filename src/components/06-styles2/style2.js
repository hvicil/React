import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <>
      <h2 style={styleTitle}>React Loops</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta
        aliquam odio et molestias rem iure atque nam natus expedita incidunt
        ipsa nostrum, porro in a ut suscipit accusamus tempora?
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>React Hoohks</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        inventore, ullam harum minima eius quae veniam, tempore explicabo dicta
        alias quas, eaque quibusdam omnis! Minima libero corrupti quos amet
        repellat.
      </p>
    </>
  );
};

export default Style2;
