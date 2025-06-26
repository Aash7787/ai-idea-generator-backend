const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/generate-ideas", (req, res) => {
  const { topic } = req.body;
  const ideas = [
    `10 Morning Habits to Boost Your ${topic}`,
    `The Best Apps for Managing Your ${topic}`,
    `How to Use the Technique for ${topic}`,
    `Avoiding Burnout While Staying ${topic}`,
  ];
  res.json(ideas);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})