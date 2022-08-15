// import { useState } from "react";
// import { update } from "../utils";

// const Update = ({ updateInfo }) => {
//   const [username, setUsername] = useState();
//   const [email, newEmail] = useState();

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     await update(username, email, updateInfo);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <label>
//         Username:
//         <input onChange={(event) => setUsername(event.target.value)} />
//       </label>
//       <br></br>
//       <label>
//         Email:
//         <input
//           type="email"
//           onChange={(event) => newEmail(event.target.value)}
//         />
//       </label>
//       <br></br>
//       <button type="newEmail">Update Email</button>
//     </form>
//   );
// };

// export default Update;
