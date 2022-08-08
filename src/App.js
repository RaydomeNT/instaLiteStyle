import { useEffect, useState } from "react";
import './App.css';
import Box from './box';
import Other from './other';

function App() {
  const [user, setUser] = useState("???");
  const [title, setTitle] = useState("???");
  const [quote, setQuote] = useState("???");
  return (
    <div className="App">
      <h1>Fill in the blanks???</h1>
      <Other />
      {/* <Box personsname = "Zelda" age = "16" />
      <Box personsname={user} age = "1" /> */}
      <Box user={user} title={title} quote={quote} />
      <input onChange={(event) => setUser(event.target.value)} />
      <br></br>
      <input onChange={(event) => setTitle(event.target.value)} />
      <br></br>
      <input onChange={(event) => setQuote(event.target.value)} />
    </div>
  )
};

export default App;