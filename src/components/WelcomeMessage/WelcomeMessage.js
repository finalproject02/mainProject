import React from "react";
import { Card } from "react-bootstrap";

const WelcomeMessage = (props) => {
  const { url, name, title, message } = props;
  return (
    <Card className="w-100 mt-5 mb-5">
      <img
        src={url}
        className="img-fluid img-thumbnail w-50 rounded-pill position-relative mt-5 top-0 start-50 translate-middle mb-0"
        alt="Jahed"
      />
      <Card.Body className="pt-0">
        <Card.Title className="text-center mb-2 textSecondary">
          {name}
        </Card.Title>
        <Card.Text className="text-center mb-2 textSecondary">
          {title}
        </Card.Text>
        <Card.Text>{message}</Card.Text>
        <Card.Text className="text-center">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WelcomeMessage;
