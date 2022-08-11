import { useState } from "react";
import { login } from "../utils";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    await login(username, password, setUser);
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
      <button onClick={submitHandler}>Log In</button>
    </form>
  );
};

export default Login;
