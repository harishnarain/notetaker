# Note Taker - Yet another note taking app
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Table of Contents
- [Note Taker - Yet another note taking app](#note-taker---yet-another-note-taking-app)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Screenshots](#screenshots)
  - [Questions](#questions)

## User Story
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Installation
1. Clone this GitHub repository

   ```
   git clone git@github.com:harishnarain/notetaker.git
   ```

2. Install all dependent npm packages

   ```
   npm install --save
   ```


## Usage
Run `npm start` and using your web browser to access http://localhost:3000.

A demo of the application is available at: https://murmuring-sands-18473.herokuapp.com/

## Features
* Auto generates an id number and ensures it doesn't conflict with existing id numbers


## License
This project uses the MIT license
## Contributing
Pull requests are welcome
## Screenshots
![Screenshot1](https://github.com/harishnarain/notetaker/blob/main/Screenshot1.png?raw=true)
![Screenshot2](https://github.com/harishnarain/notetaker/blob/main/Screenshot2.png?raw=true)


## Questions
Checkout my GitHub [profile](https://github.com/harishnarain)

Please feel free to email at: <harishnarain@gmail.com>
