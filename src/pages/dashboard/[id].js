import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Header from "@/components/Header";

const Dashboard = ({ user }) => {
  const router = useRouter();

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = router.query;

  // display what item user got
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

  // render
  return (
    <>
    <Header user={user} />
      <div className="inner-banner">
        <div className="container">
          <h2 className="inner-banner-title" >
            Dashboard
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Your Items
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="dashboard-section pt-120 pb-120">
        <div class="container">
          <div class="row">
            {items.map((item) => (
                  
                  <div key={item._id}>
                    <Link href={`/items/${item._id}`}>
                      <div className="col-md-12 mb-5">
                        <div className="dashboard-card">
                          <div className="header">
                            <h5>{item.itemName}</h5>
                          </div>
                          <div className="body">
                            <div className="counter-item">
                              <img src={item.imageUrl} alt={item.itemName} />
                              <p>Starting Price: {item.startingPrice}</p>
                              <p>Current Price: {item.currentPrice}</p>
                              <p>End Time: {new Date(item.endTime).toLocaleString()}</p>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                </div>
              ))}
          </div>
        </div>
     </div>
    </>
  );
};

export default Dashboard;


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
        user: user ? {  id: user._id.toString(), username: user.username } : null,
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

