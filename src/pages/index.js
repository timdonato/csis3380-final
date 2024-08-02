import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function Home({ user }) {
  const [items, setItems] = useState([]);

  // display items
  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);
  // --------------------------------------------------------------------------------

  // render
  return (
    <>
      <Header user={user} />
      <>
        <div className="hero-area hero-style">
          <div className="hero-main-wrapper position-relative">
            <div className="swiper banner">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slider-bg">
                    <div className="container">
                      <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10 col-lg-10">
                          <div className="banner-content">
                            <span>Welcome To Auction Hive</span>
                            <h1>Bid Smart, Win Big—Auction Hive!</h1>
                            <p>
                            Auction Hive transforms the online bidding experience with its innovative platform designed for smart, strategic bidding. With a focus on user-friendly navigation and real-time updates, Auction Hive ensures that every click brings you closer to winning big. {" "}
                            </p>
                            <Link
                              href="/items"
                              className="eg-btn btn--primary btn--lg"
                            >
                              Start Exploring
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="live-auction pb-120 pt-120">
         
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                <div className="section-title">
                  <h2>Live Auction</h2>
                  <p className="mb-0">
                    Discover the premier auction marketplace through our exquisite products. We aim to be a part of your journey towards joy, success, and future achievements.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-4 mb-60 d-flex justify-content-center">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10 ">
                  <div className="eg-card auction-card1">
                    <div className="auction-img">
                      <img alt="image" src={item.imageUrl} />
                    </div>
                    <div className="auction-content">
                      <h4>
                        <Link href="/auction-details">{item.itemName}</Link>
                      </h4>
                      <p>
                        Bidding Price : <span>${item.currentPrice}</span>
                      </p>
                      <div className="auction-card-bttm">
                        <Link
                          href={`/items/${item._id}`}
                          className="eg-btn btn--primary btn--sm"
                        >
                          Place a Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 text-center">
                <Link
                  href="/items"
                  className="eg-btn btn--primary btn--md mx-auto"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../db/models/User");
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, "CSIS3380Project");
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
