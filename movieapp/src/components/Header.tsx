import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavButton from "./NavButton";
import Form from "./Form";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Props = {};

const Header: React.FC = (props: Props) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ul>
          <li>
            <Link to="/">
              <ListItem key="Home" disablePadding>
                <ListItemButton>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to="/genres">
              <ListItem key="Genres" disablePadding>
                <ListItemButton>
                  <ListItemText primary="Genres" />
                </ListItemButton>
              </ListItem>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <ListItem key="Favorites" disablePadding>
                <ListItemButton>
                  <ListItemText primary="Favorites" />
                </ListItemButton>
              </ListItem>
            </Link>
          </li>
        </ul>
      </List>
    </Box>
  );

  return (
    <header>
      <nav className="flex justify-between items-center px-5 md:px-10 text-white bg-emerald-700 h-16">
        <div className="text-2xl md:text-3xl font-bold">Movie.EL</div>
        <Form input={input} setInput={setInput} />
        <ul className="md:flex h-full hidden">
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
        <div className="md:hidden">
          <Button
            onClick={toggleDrawer(true)}
            style={{ padding: 0, color: "white"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
