import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form4 = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label>İsim</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyisim</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={handleFormData}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefon</Label>
          <Input
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={handleFormData}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Form4;
