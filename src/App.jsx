import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/Grocerires";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 83908293829083902830928302,
    name: "Kopi Bubuk",
    qty: 2,
    checked: false,
  },
  {
    id: 2738975827348239048234923840923,
    name: "Gula Pasir",
    qty: 5,
    checked: false,
  },
  {
    id: 234239048239048239048,
    name: "Air Mineral",
    qty: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Footer />
    </div>
  );
}
