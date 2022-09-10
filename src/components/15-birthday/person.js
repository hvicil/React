import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { MdDeleteSweep } from "react-icons/md";

const Person = (props) => {
  const { id, name, image, age, sil } = props;
  return (
    <Card className="my-4">
      <Row>
        <Col sm={4}>
          <CardImg src={require(`./people/${image}`)} />
        </Col>
        <Col sm={8}>
          <CardBody>
            <CardTitle tag="h2">{name}</CardTitle>
            <CardText>Age:{age}</CardText>
            <MdDeleteSweep
              onClick={() => sil(id)}
              style={{
                fontSize: "25px",
                position: "absolute",
                right: 15,
                bottom: 15,
              }}
            />
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default Person;
