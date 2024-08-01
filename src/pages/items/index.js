import AuctionItemBlock from "../../components/Auction-Item-Block";
import { useEffect, useState } from "react";

import Header from "../../components/Header";

export default function LiveAuction({ user }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <>
      <Header user={user} />
      <div className="inner-banner">
        <div className="container">
          <h2
            className="inner-banner-title"
          >
            Live Auction
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Live Auction
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="live-auction-section pt-120 pb-120">
        <img
          alt="image"
          src="../assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
        />
        <img
          alt="image"
          src="../assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row gy-4 mb-60 d-flex justify-content-center">
            {items.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-10 ">
                <AuctionItemBlock
                  id={item._id}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  currentPrice={item.currentPrice}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <nav className="pagination-wrap">
              <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                <li className="page-item">
                  <a className="page-link" href="#" tabindex="-1">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
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
