// Dependencies
// =============================================================
const { json } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mock data
const testNotes = [
  {
    id: "1",
    title: "Test note 1",
    text: "text for test note 1",
  },
  {
    id: "2",
    title: "Test note 2",
    text: "text for test note 2",
  },
];

// Notes
const notes = [];

// Functions
// =============================================================
const deleteNote = (id) => {
  testNotes.splice(
    testNotes.findIndex((el) => el.id === id),
    1
  );
  return testNotes;
};

const generateId = () => {
  // Get all current ids
  const currentIds = [];
  testNotes.forEach((note) => currentIds.push(note.id));

  // generate Id
  let newId = "";

  do {
    newId = Math.floor(Math.random() * 10000 + 1).toString();
  } while (currentIds.includes(newId));

  return newId;
};

const saveNote = (body) => {
  // add note
  const newNote = body;
  newNote.id = generateId();
  testNotes.push(newNote);

  // return notes
  return testNotes;
};

const getNotes = () => {
  return fs.readFileSync(__dirname + "/db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return data;
  });
};

// Routes
// =============================================================

// Displays all notes
app.get("/api/notes", (req, res) => {
  return res.json(testNotes);
});

// Delete note by id
app.delete("/api/notes/:id", (req, res) => {
  return res.json(deleteNote(req.params.id));
});

// Save note
app.post("/api/notes", (req, res) => {
  return res.json(saveNote(req.body));
});

// Notes route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Home page route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
