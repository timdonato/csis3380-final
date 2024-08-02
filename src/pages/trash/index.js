import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

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
        {items.map((item, index) => (
          <li key={index}>
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


// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../../db/models/User");
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean(); // check user on database
    return {
      props: {
        user: user ? { username: user.username } : null,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
      },
    };
  }
}