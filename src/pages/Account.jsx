import { useState } from "react";

export const deleteUser = async (username, email, password, deleteAccount) => {
    try {
      const response = await fetch("http://localhost:5000/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      deleteAccount(data);
    } catch (error) {
      console.log("remove user error");
    }
  };

  const Delete = ({ deleteAccount }) => {
    const [username, deleteUsername] = useState();
  
    const submitHandler = async (event) => {
      event.preventDefault();
      await deleteUser(username, deleteAccount);
    };
  
    return (
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={(event) => deleteUsername(event.target.value)} />
        </label>
        <br></br>
        <button type="delete">Delete account</button>
      </form>
    );
  };

function DeleteAccount() {
  const [username, deleteUsername] = useState();

  return(
    <div>
        <Delete deleteAccount={deleteUsername} />
        <h2>{username}</h2>
      </div>
  )
};
  
  export default DeleteAccount;