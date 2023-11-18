import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Typography
      ml="20px"
      color="#000"
      fontWeight="bold"
      fontSize="24px"
      mt="10px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
