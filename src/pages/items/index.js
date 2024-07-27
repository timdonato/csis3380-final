import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div>
      <h1>Items List:</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link href={`/items/${item._id}`}><h2>{item.itemName}</h2></Link>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.itemName} />
            <p>Starting Price: ${item.startingPrice}</p>
            <p>Current Price: ${item.currentPrice}</p>
            <p>End Time: {new Date(item.endTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
