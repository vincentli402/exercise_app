import React from "react";
import { Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    type="button"
    className="bodyPart-card"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: bodyPart === item ? "4px solid #FF2625" : "",
      background: "#fff",
      width: "250px",
      height: "250px",
      cursor: "pointer",
      gap: "40px",
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 650, left: 100, behavior: "smooth" });
    }}
  >
    <Typography
      fontSize="20px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </div>
);

export default BodyPart;
