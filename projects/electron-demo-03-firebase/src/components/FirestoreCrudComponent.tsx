// List d'articles récupérés depuis firestore
import { useState } from "react";
import { app } from "../firebase";
import ShoppingItem from "./ShoppingItem";

type ShoppingItem = {
  name: string;
  price: number;
};

export default function FirestoreCrudComponent() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const itemList = items.map((item) => (
    <li>
      <ShoppingItem name={item.name} price={item.price} />
    </li>
  ));

  async function loadItems() {
    setItems([{ name: "test", price: 0 }]);
  }

  return (
    <div>
      <button onClick={loadItems}>loadItems</button>
      <ul>{itemList}</ul>
    </div>
  );
}
