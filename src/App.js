import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const setToggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#10032b";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 2000);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} setToggle={setToggle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={<Textform heading="Enter Text To Analyse" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
