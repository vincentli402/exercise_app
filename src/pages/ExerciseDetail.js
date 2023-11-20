import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import { async } from "q";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { exerciseId } = useParams();
  console.log("exerciseID: ", exerciseId);

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      fetch(`http://localhost:4000/api/exercises/exercise/${exerciseId}`)
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
        .then((exerciseDetailData) => {
          setExerciseDetail(exerciseDetailData);
        })
        .catch((error) => {
          console.error(
            "Error fetching exercise data from the server:",
            error.message
          );
        });
    };

    fetchExerciseDetail();
  }, [exerciseId]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: "20px" }}>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  );
};

export default ExerciseDetail;
