const notes = [];

function saveNote(content, id) {
  const notesyntax = { content: content, id: id };
  notes.push(notesyntax);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  for (const note of notes) {
    if (note.id === id) return note;
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted(content, id) {
  for (const note of notes)
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`,
    );
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
