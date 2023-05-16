// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function handleClick() {
    setNotes((prev) => [...prev, ""]);
  }
  function handleChange(e, index) {
    console.log(e.target.value);
    const notes_ = [...notes];
    notes_[index] = e.target.value;
    setNotes(notes_);
  }

  function handleDelete(index) {
    setNotes((prev) => prev.filter((x, idx) => idx !== index));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My still dogshit todo app but with git !</h1>
      </header>
      <button onClick={handleClick}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li>
            <p>Todo: </p>
            <input
              type="text"
              value={note}
              onChange={(e) => handleChange(e, index)}
            />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
