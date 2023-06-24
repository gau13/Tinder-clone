import "./App.css";
import Header from "./components/Header";
import Chats from "./components/Chats";
import Chatscreen from "./components/Chatscreen";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route
            path="/chat/:person"
            element={[<Header backButton="/chat" />, <Chatscreen />]}
          ></Route>
          <Route
            path="/chat"
            element={[<Header backButton="/" />, <Chats />]}
          ></Route>

          <Route
            path="/"
            element={[<Header />, <TinderCards />, <SwipeButtons />]}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
