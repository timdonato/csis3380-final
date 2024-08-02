// pages/item/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';
// user
import jwt from "jsonwebtoken";
import User from "../../../db/models/User";

export default function ItemPage({ user }) {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`/api/items/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setItem(data);
          setPrice(data.currentPrice);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching item:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPrice: price }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("updated the price");
      } else {
        alert(data.message || "Failed to update price");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  if (!user){
    router.push('/signin');
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.itemName}</h1>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.itemName} />
      <p>Starting Price: ${item.startingPrice}</p>
      <p>Current Price: ${item.currentPrice}</p>
      <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="currentPrice"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
        <button type="submit">update</button>
      </form>
      <p>End Time: {new Date(item.endTime).toLocaleString()}</p>
    </div>
  );
}


// to check signed in
export async function getServerSideProps(context) {
    const { req } = context;
    const token = req.cookies.authToken || "";
  
    try {
      // JWT
      const decoded = jwt.verify(token, "CSIS3380Project");
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
  