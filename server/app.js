const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Update with your React app's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.get("/api/exercises", (req, res) => {
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

app.get("/api/exercises/bodyPart/:bodyPart", (req, res) => {
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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
