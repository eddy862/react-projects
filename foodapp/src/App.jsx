import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import './app.css';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");

  return (<div className="App">
    <Nav></Nav>
    <Search foodData={foodData} setFoodData={setFoodData}></Search>
    <Container>
      <InnerContainer>
        <FoodList foodData={foodData} setFoodID={setFoodID}></FoodList>
      </InnerContainer>

      <InnerContainer>
        <FoodDetails foodID={foodID}></FoodDetails>
      </InnerContainer>
    </Container>
  </div>);
}

export default App
