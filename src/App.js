import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is the first note",
    date: "20.04.2023",
    },
    {
    id: nanoid(),
    text: "This is the second note",
    date: "22.04.2023",
      },
    {
    id: nanoid(),
    text: "This is the third note",
    date: "24.04.2023",
    }, 
    {
    id: nanoid(),
    text: "This is a new note",
    date: "26.04.2023",
      }   
  ]);

  const [searchText, setSearchText] = useState("")

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };


  const newNotes = [...notes, newNote]
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id); 
    setNotes(newNotes);
  }



  return <div className="container">
      <SearchBar handleSearchNote={setSearchText} />
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />

    </div>; 
}

export default App;