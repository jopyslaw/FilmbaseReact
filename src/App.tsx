import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import FilmDetailsPage from "./pages/FilmDetailsPage";
import AddFilmPage from "./pages/AddFilmPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { isExpired } from "react-jwt";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="details/:id" element={<FilmDetailsPage />} />
          <Route
            path="add"
            element={
              isExpired(localStorage.getItem("token") ?? "") ? (
                <Navigate replace to="/" />
              ) : (
                <AddFilmPage />
              )
            }
          />
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
