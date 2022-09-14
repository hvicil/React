import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "reactstrap";

const Useeffect2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Hello ${counter}`;
  }, [counter]);

  return (
    <Container className="text-center mt-5">
      <h2> {counter} kere kitladiniz</h2>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Click Me</Button>
    </Container>
  );
};

export default Useeffect2;
