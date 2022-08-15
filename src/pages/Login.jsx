import { Route, useNavigate, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";

export const login = async (username, password, setUser) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    //   setUser(data.user.username);
  } catch (err) {
    console.log(err);
  }
};

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState();
  const navigate = useNavigate();

  // const fetchPics = async () => {
  //     const response = await fetch("https://picsum.photos/v2/list");
  //     const data = await response.json();
  //     setMyPics(data);
  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     fetchPics();
  //   }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br></br>
      <label>
        Password:
        <input onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br></br>
      <button onClick={submitHandler} {...() => navigate("/Home")}>
        Log In
      </button>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
    </form>
  );
};

export default Login;
