const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.get("/api/exercises", (req, res) => {
  console.log("Received request to /api/exercises");
  fetch("https://exercisedb.p.rapidapi.com/exercises", {
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in response");
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/api/bodyPartList", (req, res) => {
  console.log("Received request to /api/bodyPartList");
  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in response");
      }
      return response.json();
    })
    .then((bodyPartsData) => {
      res.json(bodyPartsData);
    })
    .catch((error) => {
      console.error(
        "Error fetching body parts list from the API:",
        error.message
      );
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/api/exercises/bodyPart/:bodyPart", (req, res) => {
  console.log("Received request to /api/exercises/bodyPart");
  const { bodyPart } = req.params;

  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, {
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in response");
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/api/exercises/exercise/:exerciseId", (req, res) => {
  console.log("Received request to /api/exercises/exercise");
  const { exerciseId } = req.params;

  fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, {
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in response");
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
