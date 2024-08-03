// pages/item/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

// user
import User from "../../../db/models/User";

import Header from "../../components/Header";

export default function AuctionDetails({ user }) {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [bidMessages, setBidMessages] = useState([]);

  // get data from db and set values
  useEffect(() => {
    if (id) {
      fetch(`/api/items/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setItem(data.item);
          setPrice(data.item.currentPrice);
          setLoading(false);
          const allMessages = data.bids.flatMap((bid) => bid.message);
          setBidMessages(allMessages);
        })
        .catch((error) => {
          console.error("Error fetching item:", error);
          setLoading(false);
        });
    }
  }, [id]);

  // update current price, check username and add bid message to bid db
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1] || "";

    try {
      const response = await fetch(`/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Ensure you send the token with the request
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ currentPrice: price }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Bid placed by ${user?.username || "Unknown User"}`);
        window.location.href = `/items/${id}`;
      } else {
        alert(data.message || "Failed to update price");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };
  // -------------------------------------------------

  // handle delete
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert("delete successfully");
        router.push("/items");
      } else {
        alert(data.message || "Failed to delete price");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };
  // ------------------------------------------------

  // check signed in
  if (!user) {
    router.push("/signin");
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  // render
  return (
    <>
      <Header user={user} />
      <div className="inner-banner">
        <div className="container">
          <h2 className="inner-banner-title">
            Auction Details
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Auction Details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="auction-details-section pt-120">
       
        <div className="container">
          <div className="row g-4 mb-50">
            <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
              
              <div className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center">
                <div className="tab-pane big-image show active" id="gallery-img1">
                  <Image alt="image" src={item.imageUrl} className="img-fluid" height={500} width={500} />
                </div>
                
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="product-details-right">
                <h3>{item.itemName}</h3>
                <p className="para">{item.description}</p>
                <h4>
                  Bidding Price: <span>${item.currentPrice}</span>
                </h4>
                <div className="bid-form">
                  <div className="form-title">
                    <h5>Bid Now</h5>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-inner gap-2">
                      <input
                        type="text"
                        name="currentPrice"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="$00.00"
                      />
                      <button className="eg-btn btn--primary btn--sm" type="submit">
                        Place Bid
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-8">
              <ul
                className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 "
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active details-tab-btn"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Bidding History
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="describe-content">
                    <ul className="describe-list">
                      {bidMessages
                        .slice()
                        .reverse()
                        .map((msg, index) => (
                          <li key={index}>{msg}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                {user.username == "superuser" ? (
                  <div className="d-flex">
                    <Link href={`/items/edit/${id}`}>
                      <input type="button" value="Edit" className="eg-btn btn--primary2 btn--sm"/>
                    </Link>
                    &nbsp;&nbsp;
                    <form onSubmit={handleDelete}>
                      <input type="submit" value="delete" className="eg-btn btn--primary2 btn--sm" />
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean(); // check user on database

    return {
      props: {
        user: user
          ? { id: user._id.toString(), username: user.username }
          : null,
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
