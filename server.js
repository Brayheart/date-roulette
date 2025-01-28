const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const dateIdeas = [
  { idea: "Go to a weird antique store", vibe: "adventurous" },
  { idea: "Take a spontaneous road trip", vibe: "adventurous" },
  {
    idea: "Cook a meal together with only existing ingredients",
    vibe: "tasty",
  },
  { idea: "Indoor movie night!", vibe: "chill" },
];

app.get("/random-date", (req, res) => {
  const { vibe } = req.query;
  let filteredIdeas = dateIdeas;

  if (vibe != "all") {
    filteredIdeas = dateIdeas.filter((d) => d.vibe === vibe);
  }

  if (filteredIdeas.length === 0) {
    return res.json({ idea: "No matching ideas!" });
  }

  const randomIdea =
    filteredIdeas[Math.floor(Math.random() * filteredIdeas.length)];
  res.json(randomIdea);
});

app.get("/", (req, res) => {
  res.json("test?");
});

app.listen(3000, () => console.log("Server running on port 3000"));
