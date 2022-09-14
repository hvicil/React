import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import UserCard from "./usercard";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://631f92a722cefb1edc4e941f.mockapi.io/api/v1/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      {loading && (
        <div className="d-flex align-center justify-content-center">
          <Spinner color="primary" />
          Loading...
        </div>
      )}
      <Row className="g-4">
        {users.map((user) => (
          <Col sm={6} md={4} lg={3} key={user.id}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;
