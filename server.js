const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🌿 GrowViral is LIVE");
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
