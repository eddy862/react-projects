import Item from "./Item";

export default function ItemList({food, isLoading}) {
  return (<>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      food.extendedIngredients.map(item => <Item key={item.id} item={item}></Item>)
    )}
  </>);
}