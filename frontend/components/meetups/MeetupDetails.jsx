import React, { Fragment } from "react";
import classes from "./meetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.img} alt="A first meet up" />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
