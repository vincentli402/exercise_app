import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/icons/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="none" gap="450px" mt="20px" px="20px">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "75px", height: "75px", margin: "0px 20px" }}
        />
      </Link>
      <Stack direction="row" margin="25px" gap="60px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
