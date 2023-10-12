// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <AppRoutes /> 
      </DefaultLayout>
    </Router>
  );
}

export default App;