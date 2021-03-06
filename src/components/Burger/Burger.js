import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
