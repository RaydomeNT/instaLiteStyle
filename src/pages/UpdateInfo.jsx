import { useState } from "react";

export const update = async (username, email, updateInfo) => {
  console.log(username, email, updateInfo);
  try {
    const response = await fetch("http://localhost:5000/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
    updateInfo(data.message);
  } catch (error) {
    console.log(error);
  }
};

const Update = ({ updateInfo }) => {
  const [username, setUsername] = useState();
  const [email, newEmail] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await update(username, email, updateInfo);
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
          onChange={(event) => newEmail(event.target.value)}
        />
      </label>
      <br></br>
      <button type="newEmail">Update Email</button>
    </form>
  );
};

function UpdateEmail() {
  const [email, setEmail] = useState();

  return (
    <div>
      <Update updateInfo={setEmail} />
      <h2>{email}</h2>
    </div>
  );
}

export default UpdateEmail;
