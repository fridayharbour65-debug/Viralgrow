const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/generate", (req, res) => {
  const ideas = [
    "Scrap metal haul transformation 🔧",
    "Before & after junk removal 💥",
    "Free pickup in your area 🚛",
    "Turn junk into cash 💰",
    "Clean yard transformation 🔥"
  ];

  const random = ideas[Math.floor(Math.random() * ideas.length)];

  res.json({
    caption: random,
    hashtags: "#scrapmetal #junkremoval #sidehustle #cleanup #localbusiness"
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});