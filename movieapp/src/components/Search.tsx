import React, {  useState } from "react";
import axios from 'axios';
import Form from "./Form";

type Props = {};

const Search: React.FC = (props: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="h-full w-full">
      <Form input={input} setInput={setInput}/>
    </div>
  );
};

export default Search;
