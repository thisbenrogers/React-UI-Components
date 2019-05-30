import React from "react";
import "./Card.scss";

const CardContent = () => {
  return (
    <div className="card-content">
      <h3>Get Started With React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="link">reactjs.org</p>
    </div>
  );
};

export default CardContent;
