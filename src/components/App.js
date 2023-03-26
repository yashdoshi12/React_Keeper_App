import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createnote(noteitem) {
  return (
    <Note
      key={noteitem.key}
      title={noteitem.title}
      content={noteitem.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createnote)}
      <Footer />
    </div>
  );
}

export default App;
