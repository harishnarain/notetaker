// Dependencies
// =============================================================
const { json } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Globals
const db = `${__dirname}/db/db.json`;
let notes = [];

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

// Functions
// =============================================================
const writeToDb = () => {
  fs.writeFileSync(db, JSON.stringify(notes), "utf8");
};

const deleteNote = (id) => {
  // delete note
  notes.splice(
    notes.findIndex((note) => note.id == id),
    1
  );
  writeToDb();

  // return notes
  return notes;
};

const generateId = () => {
  // Get all current ids
  const currentIds = [];
  notes.forEach((note) => currentIds.push(note.id));

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
  notes.push(newNote);
  writeToDb();

  // return notes
  return notes;
};

const getNotes = () => {
  const temp = fs.readFileSync(db, "utf8", (err, data) => {
    if (err) throw err;
    const updatedNotes = [];
    JSON.parse(data).forEach((note) => {
      updatedNotes.push(note);
    });
    return updatedNotes;
  });
  notes = JSON.parse(temp);
  return notes;
};

// Routes
// =============================================================

// Displays all notes
app.get("/api/notes", (req, res) => {
  return res.json(getNotes());
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

// Initialization
getNotes();

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
