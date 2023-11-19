import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = () => {
      let endpoint = "http://localhost:4000/api/exercises";
      if (bodyPart !== "all") {
        endpoint = `http://localhost:4000/api/exercises/bodyPart/${bodyPart}`;
      }

      fetch(endpoint)
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
        .then((newExercisesData) => {
          setExercises((prevExercises) => [...prevExercises, ...newExercisesData]);
        })
        .catch((error) => {
          console.error("Error fetching exercises data from the server:", error.message);
        });
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" p="20px">
      <Typography fontSize="40px" fontWeight="bold" mb="60px">
        Showing Results
      </Typography>

      {exercises.length === 0 ? (
        <Typography fontSize="30px" fontWeight="bold" textAlign="center" mb="60px">
          No exercises found
        </Typography>
      ) : (
        <>
          <Stack direction="row" gap="150px" flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack mt="50px" alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Exercises;
