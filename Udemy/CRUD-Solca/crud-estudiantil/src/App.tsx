import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TableStudent } from "./components/TableStudent";
import { CreateStudent } from "./components/CreateStudent";
import { EditStudent } from "./components/EditStudent";
import { ViewDetails } from "./components/ViewDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableStudent />}></Route>
        <Route path="/student/create" element={<CreateStudent />}></Route>
        <Route
          path="/student/edit/:studentid"
          element={<EditStudent />}
        ></Route>
        <Route
          path="/student/view/:studentid"
          element={<ViewDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
