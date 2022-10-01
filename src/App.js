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
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import DataContextProvider from "./context/DataContext";
import userData from "./dummyData";
import { recommendedJobs } from "./dummyData";
import { isEmpty } from "./utils/utils";

function App() {
  const [data, dispatch] = DataContextProvider();
  useEffect(() => {
    dispatch({
      type: "ADD_DATA",
      data: userData,
    });
    dispatch({
      type: "ADD_RECOMMENDED_JOBS",
      data: recommendedJobs,
    });
    return () => {
      dispatch({
        type: "REMOVE_DATA",
      });
    };
  }, []);

  if (isEmpty(data)) {
    console.log("no data");
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <div className="header_wrapper">
        <Header data={data} />
      </div>

      <div className="sidebar_wrapper">
        <SideBar />
      </div>
      <div className="main_content">
        <Router>
          <Routes>
            <Route exact path="/application" element={<Application />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
