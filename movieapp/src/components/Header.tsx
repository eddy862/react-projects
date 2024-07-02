import React, {useState} from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Form from "./Form";

type Props = {};

const Header: React.FC = (props: Props) => {
  const [input, setInput] = useState("");

  return (
    <header>
      <nav
        className="flex justify-between items-center px-10 text-white bg-emerald-700 h-16"
      >
        <div className="text-4xl font-bold">Movie.EL</div>
        <Form input={input} setInput={setInput} />
        <ul className="flex h-full">
          <li>
            <Link to="/">
              <NavButton text="Home" />
            </Link>
          </li>
          <li>
            <Link to="/genres">
              <NavButton text="Genres" />
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
