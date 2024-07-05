import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Props = {};

const Home: React.FC = ({}: Props) => {
  return (
    <div
      className="w-96 h-96 rounded-full relative"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
    >
      <div className="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 flex flex-col items-center gap-5 text-nowrap">
        <div className="welcome-msg text-4xl md:text-5xl font-bold">
          Welcome To Movie.EL
        </div>
        <Link to={"/genres"}>
          <button className="home-btn flex items-center gap-3 bg-emerald-700 md:text-lg font-bold px-5 py-3 rounded-full text-white hover:bg-emerald-600">
            Explore movies by genres
            <FontAwesomeIcon icon={faClapperboard} beat size="lg" inverse />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
