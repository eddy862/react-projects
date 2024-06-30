import React, { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Context } from "./Context/Context";

function App() {
  const { isDarkMode } = useContext(Context);

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex min-h-screen`}>
      <Sidebar></Sidebar>
      <Main className="flex-1"></Main>
    </div>
  );
}

export default App;
