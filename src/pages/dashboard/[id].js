import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setItems(data.items);
          console.log(items)
          setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
          console.error("Error fetching item:", error);
          setLoading(false);
        });
    }
    
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Your Items</h1>
      <ul>
      {items.map((item) => (
          <li key={item._id}>
            <h2>{item.itemName}</h2>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.itemName} />
            <p>Starting Price: {item.startingPrice}</p>
            <p>Current Price: {item.currentPrice}</p>
            <p>End Time: {new Date(item.endTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
