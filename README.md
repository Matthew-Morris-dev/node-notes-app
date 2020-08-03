# node-notes-app

This project was build with the purpose of learning node and command-line arguments.

## Getting started
After cloning or downloading the repository run
    `npm install`
from within the src directory, in order to install all dependencies.
The application runs with command-line agruments below is a list of arguments and how to use them.

### Using the application

#### Adding a note
    node src/app.js add --title="This is the notes title" --body="My first note's description"
This will create a new note with the provided title and body.

#### Removing a note
    node src/app.js remove --title="This is the notes title"
This will remove the note with the matching title, provided it exists.

#### Listing notes
    node src/app.js list
This will display the titles of all exisiting notes.

#### Reading a note
    node src/app.js read --title="This is the notes title"
This will find the note with the matching title and display the note's body.
