import React from 'react';
import './App.css';
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";

function App() {
  return (
      <div className="App">
        <AddNote/>
        <NotesList/>
      </div>
  );
}

export default App;
