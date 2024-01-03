import express from "express";

const app = express();

const port = 3000;
const jock = [
  { id: 1, title: "This is First Joke 🍕", contest: "I am the First" },

  { id: 2, title: "Second Joke 🧨", contest: "I am a Jock" },

  { id: 3, title: "Third Joke 🚑", contest: "I am a Jock" },

  { id: 4, title: "Forth Joke 🛺", contest: "I am a Jock" },

  { id: 5, title: "Fifth Joke 🎃", contest: "I am the last one Booya!" },
];

// app.get('/' , (req,res) =>{
//   res.send("hey I am there 🫡");
// });

app.get("/api/jock", (req, res) => {
  res.send(jock);
});

app.listen(port, () => {
  console.log(`your App 😄 was Listen in http://localhost:${port}`);
});
