import { useState } from "react";

export const allUsers = async (username, getter) => {
    console.log(username);
    try {
      const response = await fetch("http://localhost:5000/list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
      getter(data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const AllUsers = ({ getter }) => {
    const [username] = useState();
  
    const setDisplay = async (event) => {
      event.preventDefault();
      await allUsers(username, getter);
    };
  
    return (
      <div onClick={setDisplay}>
        <button type="get">People you may know</button>
      </div>
    );
  };

  function ListAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
    
  return (
    <div>
        <AllUsers getter={setAllUsers} />
        {allUsers.map((allUsers) => (
          <ul>
            <h2>{allUsers}</h2>
          </ul>
        ))}
      </div>
  )
  }
  
  export default ListAllUsers;