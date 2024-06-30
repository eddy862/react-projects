import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Favourite from "./components/Favourite";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favourite />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
