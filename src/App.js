// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home";
import UserHomePage from "./components/userPanel/UserHomePage";
import Header from "./components/userPanel/Header";
import Logout from "./components/userPanel/Logout";
import { useState } from "react";
import UploadImage from "./components/userPanel/UploadImage";

function App() {
  const isUserLoggedIn = localStorage.getItem("currentUser");
  console.log("isUserLoggedIn rout", isUserLoggedIn);

  const [isLoggedIn, setIsLoggedIn] = useState(
    // Check if the user is already logged in (e.g., based on token in localStorage)
    localStorage.getItem("token") !== null
  );

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<UserHomePage />}></Route>
            <Route path="/Home" element={<UserHomePage />}></Route>
            <Route path="/Upload" element={<UploadImage />}></Route>
            <Route
              path="/Logout"
              element={<Logout handleLogin={handleLogin} />}
            ></Route>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home handleLogin={handleLogin} />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
