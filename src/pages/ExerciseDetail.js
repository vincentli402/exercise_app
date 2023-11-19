import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = () => {
      fetch(`https://exercisedb.p.rapidapi.com/exercises/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
        .then((exerciseDetailData) => {
          setExerciseDetail(exerciseDetailData);
        })
        .catch((error) => {
          console.error("Error fetching exercise detail:", error.message);
        });
    };

    fetchExerciseDetail();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: "20px" }}>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  );
};

export default ExerciseDetail;
