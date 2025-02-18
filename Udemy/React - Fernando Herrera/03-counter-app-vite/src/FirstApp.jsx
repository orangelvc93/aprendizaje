import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({
  title = "Hola, soy Vegueta",
  subtitle = "soy un Sayajin",
  name,
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
