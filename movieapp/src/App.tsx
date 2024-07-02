import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";
import Genres from "./components/Genres";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/favorites" element={<Favourite />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
