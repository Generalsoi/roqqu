import React from "react";
import { Route, Routes } from "react-router-dom";
import { Stepone } from "./components/stepone";
import { Steptwo } from "./components/steptwo";
import { Stepthree } from "./components/stepthree";
import { Stepfour } from "./components/stepfour";
import { Stepfive } from "./components/stepfive";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Stepone />} path="/" />
        <Route element={<Steptwo />} path="/steptwo" />
        <Route element={<Stepthree />} path="/stepthree" />
        <Route element={<Stepfour />} path="/stepfour" />
        <Route element={<Stepfive />} path="/stepfive" />
      </Routes>
    </div>
  );
};

export default App;
