import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Search from "./pages/Search";
import UpdateInfo from "./pages/UpdateInfo";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <h1>Instagram Lite Clone</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Create Your Account</Link>
          <Link to="/login">Login</Link>
          <Link to="/account">Account Details</Link>
          <Link to="/search">Find Users</Link>
          <Link to="/updateInfo">Update Account</Link>
          <Link to="/home">Home</Link>
        </nav>
        <Routes>
          <Route path="*" element={<CreateUser />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<Search />} />
          <Route path="/updateInfo" element={<UpdateInfo />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
