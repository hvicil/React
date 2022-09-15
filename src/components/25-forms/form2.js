import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  console.log(phone);

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            type="text"
            placeholder="Adınızı giriniz"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            type="text"
            placeholder="Soyadınızı giriniz"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Epostanızı giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefon</Label>
          <Input
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form2;
