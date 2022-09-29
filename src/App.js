import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Applications from "./pages/Applications";
import DataContextProvider from "./context/DataContext";
import userData from "./dummyData";

function App() {
  const [data, dispatch] = DataContextProvider();
  useEffect(() => {
    dispatch({
      type: "ADD_DATA",
      data: userData,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main_content">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Router>
            <Routes>
              <Route exact path="/applications" element={<Applications />} />
              <Route exact path="/application" element={<Applications />} />
              <Route path="/" element={<Navigate to="/applications" />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
