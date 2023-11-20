import React from "react";
import { Typography, Stack } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: "row", p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: "30px" }}>
        <Typography
          sx={{ fontSize: "60px" }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>

        <Typography
          textTransform="capitalize"
          sx={{ fontSize: "30px", marginTop: "10px" }}
        >
          Body Part: {bodyPart}
        </Typography>

        <Typography textTransform="capitalize" sx={{ fontSize: "30px" }}>
          Target: {target}
        </Typography>

        <Typography textTransform="capitalize" sx={{ fontSize: "30px" }}>
          Equipment: {equipment}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
