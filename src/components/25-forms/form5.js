import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Form5 = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || formData.firstName.length<2) {
      alert("Lutfen adinizi giriniz");
      return;
    }

    
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit" color="info">
          Kaydet
        </Button>
      </Form>
    </Container>
  );
};

export default Form5;
