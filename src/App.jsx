import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CounterPage from "./Components/CounterPage";
import PageNotFound from "./Components/PageNotFound";
import ErrorBoundaryPage from "./Components/ErrorBoundaryPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/error-boundary" element={<ErrorBoundaryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
