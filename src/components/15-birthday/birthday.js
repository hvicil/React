import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import data from "./people.json";
import Person from "./person";

const Birthday = () => {
  const [dataPeople, setDataPeople] = useState(data);

  const deletePerson = (id) => {
    const arr = dataPeople.filter((person) => person.id !== id);
    setDataPeople(arr);
  };

  return (
    <Container className="my-5">
      <h1>Bugün Doğanlar</h1>
      <p>Bugün doğan {dataPeople.length} kişi var. </p>

      {dataPeople.map((item) => (
        <Person {...item} sil={deletePerson} key={item.id} />
      ))}

      <Button color="danger" onClick={() => setDataPeople([])}>
        Temizle
      </Button>
    </Container>
  );
};

export default Birthday;
