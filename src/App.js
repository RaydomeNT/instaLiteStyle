import { useState, useEffect } from "react";
import "./App.css";
import Delete from "./components/delete";
import AllUsers from "./components/get";
import Login from "./components/login";
import SignupLogin from "./components/signupLogin";
import Update from "./components/update";

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [myPics, setMyPics] = useState([]);
  const [username, deleteUsername] = useState();
  const [email, setEmail] = useState();
  const [allUsers, setAllUsers] = useState([]);
  // const [login, setLogin] = useState();
  // const [displayImages, setDisplay] = useState(false);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <div className="App">
      <SignupLogin setter={setUser} />
      <br></br>
      <h1>{user}</h1>
      <br></br>
      <div>
        <Delete deleteAccount={deleteUsername} />
        <h2>{username}</h2>
      </div>
      <br></br>
      <div>
        <Update updateInfo={setEmail} />
        <h2>{email}</h2>
      </div>
      <br></br>
      <div>
        <Login setUser={setLoggedIn} />
        <h2>{loggedIn && <p>welcome back</p>}</h2>
      </div>
      {loggedIn &&
        myPics.map((item) => {
          return (
            <div>
              <h2>{item.author}</h2>
              <img src={item.download_url} alt="img" />
            </div>
          );
        })}
      <div>
        <AllUsers getter={setAllUsers} />
        {allUsers.map((allUsers) => (
          <ul>
            <h2>{allUsers}</h2>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
