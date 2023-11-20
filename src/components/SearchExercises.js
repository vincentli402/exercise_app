import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = () => {
      fetch("http://localhost:4000/api/bodyPartList")
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
        .then((bodyPartsData) => {
          setBodyParts(bodyPartsData);
        })
        .catch((error) => {
          console.error(
            "Error fetching body parts from the server:",
            error.message
          );
        });
    };

    fetchBodyParts();
  }, []);

  const handleSearch = () => {
    if (search) {
      fetch("http://localhost:4000/api/exercises")
        .then((response) => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error("Error in response");
          }
          return response.json();
        })
        .then((exercisesData) => {
          const searchedExercises = exercisesData.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          window.scrollTo({ top: 650, left: 100, behavior: "smooth" });

          setSearch("");
          setExercises(searchedExercises);
        })
        .catch((error) => {
          console.error("Error fetching data from the server:", error.message);
        });
    }
  };

  return (
    <Stack alignItems="center" mt="20px" justifyContent="center" p="20px">
      <Typography fontWeight="700" fontSize="45px" mb="30px" textAlign="center">
        Exercises To Get You Started
      </Typography>
      <Box position="relative" mb="50px">
        <TextField
          height="60px"
          sx={{ width: "800px", backgroundColor: "#fff" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: "100px",
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: "15px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
