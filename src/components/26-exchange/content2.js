import React, { useContext, useRef, useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import StoreContext from "../../store";

const Content2 = () => {
  const [result, setResult] = useState(null);
  const store = useContext(StoreContext);
  const { currencies } = store;
  const refAmount = useRef(null);
  const refType = useRef(null);

  const convertCurrency = () => {
    const tl = (
      refAmount.current.value / currencies[refType.current.value]
    ).toFixed(2);
    setResult(tl);
  };
  return (
    <div className="mt-4">
      <InputGroup size="lg">
        <Input innerRef={refAmount} defaultValue="1" />
        <Input type="select" innerRef={refType}>
          <option>USD</option>
          <option>EUR</option>
        </Input>
        <Button onClick={convertCurrency}>Convert to TRY</Button>
      </InputGroup>
      {result && (
        <h4 className="mt-4">
          {refAmount.current.value} {refType.current.value} = {result} TRY
        </h4>
      )}
    </div>
  );
};

export default Content2;
