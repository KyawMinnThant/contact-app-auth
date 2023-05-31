import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "flowbite";
import RouteGuard from "./route/RouteGuard";
import ContactList from "./pages/ContactList";
import Contact from "./pages/Contact";
import CreateContact from "./pages/CreateContact";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
// import ContactList from './pages/ContactList';
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <ContactList />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </>
  );
};

export default App;
