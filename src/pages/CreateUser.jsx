import { Route, useNavigate, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

export const signUp = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data.newUser.username);
    setter(data.newUser.username);
  } catch (error) {
    console.log("signUp error");
  }
};

const CreateUser = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br></br>
      <label>
        Email:
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br></br>
      <label>
        Password:
        <input onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br></br>
      <button type="submit">Sign Up</button>
      <br></br>
      <button onClick={() => navigate("/Login")}>Go to login page</button>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </form>
  );
};

function CreateAccount() {
  const [user, setUser] = useState();

  return (
    <div className="CreateAccount">
      <CreateUser setter={setUser} />
      <br></br>
      <h1>{user}</h1>
      <br></br>
    </div>
  );
}

export default CreateAccount;
