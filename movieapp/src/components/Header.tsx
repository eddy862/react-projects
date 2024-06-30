import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header>
      <nav
        className="flex justify-between items-center px-10 text-white bg-emerald-700 h-16"
      >
        <div className="text-4xl font-bold">Movie.EL</div>
        <ul className="flex h-full">
          <li>
            <Link to="/">
              <NavButton text="Home" />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <NavButton text="Search" />
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <NavButton text="Favorites" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
