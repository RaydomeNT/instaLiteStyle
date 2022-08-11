import { useState } from "react";
import { allUsers } from "../utils";

const AllUsers = ({getter}) => {
    const [username] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    const setDisplay = async (event) => {
        event.preventDefault();
        await allUsers(username, getter);
    }

    return (
        <div onClick={setDisplay}>
            {/* <label>Enter your postcode:
                <input onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <br></br> */}
            <button type="get">People you may know</button>
        </div>
    )         
}

export default AllUsers;