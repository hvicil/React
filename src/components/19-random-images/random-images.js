import React, { useState } from "react";
import { Container, Card, CardBody, Button } from "reactstrap";

const RandomImages = () => {
  const [randomNum, setRandomNum] = useState(1);

  const handleRandomNum = () => {
    const rand = Math.floor(Math.random() * 6 + 1);
    setRandomNum(rand);
  };
 return (
    <Container className="mt-5">
      <Card>
        <img
          alt="Sample"
          src={require(`../../assets/img/image${randomNum}.jpg`)}
        />
        <CardBody>
          <Button onClick={handleRandomNum}>Change</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default RandomImages;
