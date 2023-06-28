import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  const [notes, setNotes] = useState([])
  const createNote = (params) => {
    setNotes([...notes, params])
  }
  const deleteNote = (i) => {
    setNotes(
      notes.filter((data, index) => {
        return (index !== i)
      })
    )
  }
  return (
    <div>
      <Header />
      <CreateArea create={createNote} />
      {notes.map((data, i) => {
        return (
          <Note key={i} id={i} delete={deleteNote} title={data.title} content={data.content} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
