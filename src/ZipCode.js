import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import "./App.css";

const ZipCode = props => {
  const {
    City,
    State,
    Country,
    Zipcode,
    Lat,
    Long,
    TotalWages,
    EstimatedPopulation,
  } = props.result;
  return (
    // <Col id="info" sm="10" md={{ size: 3, offset: 7 }}>
         <Col id="info">
      <Card id="card" body>
        <CardTitle>
          <h5> {City}, {State}{" "}</h5>
        </CardTitle>

        <CardText>
          <strong>Location</strong>:({Lat} ,{Long})
        </CardText>
    
        <CardText>
          <strong>Country</strong>: {Country}
        </CardText>
    
        <CardText>
          <strong>Population (estimated): </strong>: {EstimatedPopulation}
        </CardText>
        <CardText>
          <strong>Total Wages</strong>: ${TotalWages}{" "}
        </CardText>
      </Card>
      <br />
    </Col>
  );
};

export default ZipCode;
