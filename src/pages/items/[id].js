// pages/item/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
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
  // const [messageTime, setMessageTime] = useState([]);

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
          // const allMessagesTime = data.bids.flatMap((bid) => bid.createdAt);
          // setMessageTime(allMessagesTime);
        })
        .catch((error) => {
          console.error("Error fetching item:", error);
          setLoading(false);
        });
    }
  }, [id]);

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

  return (
    <>
      <Header user={user} />
      <div class="inner-banner">
        <div class="container">
          <h2
            class="inner-banner-title  wow fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay=".4s"
          >
            Auction Details
          </h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Auction Details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="auction-details-section pt-120">
        <img
          alt="image"
          src="/images/bg/section-bg.png"
          class="img-fluid section-bg-top"
        />
        <img
          alt="image"
          src="/images/bg/section-bg.png"
          class="img-fluid section-bg-bottom"
        />
        <div class="container">
          <div class="row g-4 mb-50">
            <div class="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
              <ul
                class="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
              >
                <li class="nav-item">
                  <div
                    id="details-img1"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img1"
                    aria-controls="gallery-img1"
                  >
                    <img alt="image" src={item.imageUrl} class="img-fluid" />
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    id="details-img2"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img2"
                    aria-controls="gallery-img2"
                  >
                    <img
                      alt="image"
                      src="/images/bg/prod-gallery2.png"
                      class="img-fluid"
                    />
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    id="details-img3"
                    data-bs-toggle="pill"
                    data-bs-target="#gallery-img3"
                    aria-controls="gallery-img3"
                  >
                    <img
                      alt="image"
                      src="/images/bg/prod-gallery3.png"
                      class="img-fluid"
                    />
                  </div>
                </li>
              </ul>
              <div
                class="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
              >
                <div
                  class="tab-pane big-image fade show active"
                  id="gallery-img1"
                >
                  <div class="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                    <h3 id="countdown-timer-1">&nbsp;</h3>
                  </div>
                  <img alt="image" src={item.imageUrl} class="img-fluid" />
                </div>
                <div class="tab-pane big-image fade" id="gallery-img2">
                  <div class="auction-gallery-timer d-flex align-items-center justify-content-center">
                    <h3 id="countdown-timer-2">&nbsp;</h3>
                  </div>
                  <img
                    alt="image"
                    src="/images/bg/prod-gallery2.png"
                    class="img-fluid"
                  />
                </div>
                <div class="tab-pane big-image fade" id="gallery-img3">
                  <div class="auction-gallery-timer d-flex align-items-center justify-content-center">
                    <h3 id="countdown-timer-3">&nbsp;</h3>
                  </div>
                  <img
                    alt="image"
                    src="/images/bg/prod-gallery3.png"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5">
              <div
                class="product-details-right  wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <h3>{item.itemName}</h3>
                <p class="para">{item.description}</p>
                <h4>
                  Bidding Price: <span>${item.currentPrice}</span>
                </h4>
                <div class="bid-form">
                  <div class="form-title">
                    <h5>Bid Now</h5>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-inner gap-2">
                      <input
                        type="text"
                        name="currentPrice"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="$00.00"
                      />
                      <button class="eg-btn btn--primary btn--sm" type="submit">
                        Place Bid
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center g-4">
            <div class="col-lg-8">
              <ul
                class="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active details-tab-btn"
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
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="describe-content">
                    <ul class="describe-list">
                      {bidMessages
                        .slice()
                        .reverse()
                        .map((msg, index) => (
                          <p key={index}>{msg}</p>
                        ))}
                        {/* {messageTime
                        .slice()
                        .reverse()
                        .map((msg, index) => (
                          <p key={index}>{msg}</p>
                        ))} */}
                        
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-bid"
                  role="tabpanel"
                  aria-labelledby="pills-bid-tab"
                >
                  <div class="bid-list-area">
                    <ul class="bid-list">
                      <li>
                        <div class="row d-flex align-items-center">
                          <div class="col-7">
                            <div class="bidder-area">
                              <div class="bidder-img">
                                <img alt="image" src="/images/bg/bidder1.png" />
                              </div>
                              <div class="bidder-content">
                                <a href="#">
                                  <h6>Robart FOX</h6>
                                </a>
                                <p>24.50 ETH</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-5 text-end">
                            <div class="bid-time">
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="row d-flex align-items-center">
                          <div class="col-7">
                            <div class="bidder-area">
                              <div class="bidder-img">
                                <img alt="image" src="/images/bg/bidder2.png" />
                              </div>
                              <div class="bidder-content">
                                <a href="#">
                                  <h6>Jane Cooper</h6>
                                </a>
                                <p>224.5 ETH</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-5 text-end">
                            <div class="bid-time">
                              <p>5 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="row d-flex align-items-center">
                          <div class="col-7">
                            <div class="bidder-area">
                              <div class="bidder-img">
                                <img alt="image" src="/images/bg/bidder3.png" />
                              </div>
                              <div class="bidder-content">
                                <a href="#">
                                  <h6>Guy Hawkins</h6>
                                </a>
                                <p>34.5 ETH</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-5 text-end">
                            <div class="bid-time">
                              <p>6 Hours 45 minutes Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="row d-flex align-items-center">
                          <div class="col-7">
                            <div class="bidder-area">
                              <div class="bidder-img">
                                <img alt="image" src="/images/bg/bidder1.png" />
                              </div>
                              <div class="bidder-content">
                                <a href="#">
                                  <h6>Robart FOX</h6>
                                </a>
                                <p>24.50 ETH</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-5 text-end">
                            <div class="bid-time">
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="row d-flex align-items-center">
                          <div class="col-7">
                            <div class="bidder-area">
                              <div class="bidder-img">
                                <img alt="image" src="/images/bg/bidder2.png" />
                              </div>
                              <div class="bidder-content">
                                <a href="#">
                                  <h6>Robart FOX</h6>
                                </a>
                                <p>24.50 ETH</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-5 text-end">
                            <div class="bid-time">
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div class="row d-flex justify-content-center g-4">
                    <div class="col-lg-6 col-md-4 col-sm-10">
                      <div class="eg-card auction-card1">
                        <div class="auction-img">
                          <img alt="image" src="/images/bg/live-auc1.png" />
                          <div class="auction-timer">
                            <div class="countdown" id="timer1">
                              <h4>
                                <span id="hours1">05</span>H :{" "}
                                <span id="minutes1">52</span>M :{" "}
                                <span id="seconds1">32</span>S
                              </h4>
                            </div>
                          </div>
                          <div class="author-area">
                            <div class="author-emo">
                              <img
                                alt="image"
                                src="/images/icons/smile-emo.svg"
                              />
                            </div>
                            <div class="author-name">
                              <span>by @robatfox</span>
                            </div>
                          </div>
                        </div>
                        <div class="auction-content">
                          <h4>
                            <a href="auction-details.html">
                              Brand New royal Enfield 250 CC For Sale
                            </a>
                          </h4>
                          <p>
                            Bidding Price : <span>$85.9</span>
                          </p>
                          <div class="auction-card-bttm">
                            <a
                              href="auction-details.html"
                              class="eg-btn btn--primary btn--sm"
                            >
                              Place a Bid
                            </a>
                            <div class="share-area">
                              <ul class="social-icons d-flex">
                                <li>
                                  <a href="https://www.facebook.com/">
                                    <i class="bx bxl-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.twitter.com/">
                                    <i class="bx bxl-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.pinterest.com/">
                                    <i class="bx bxl-pinterest"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/">
                                    <i class="bx bxl-instagram"></i>
                                  </a>
                                </li>
                              </ul>
                              <div>
                                <a href="#" class="share-btn">
                                  <i class="bx bxs-share-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-4 col-sm-10">
                      <div class="eg-card auction-card1 wow fadeInDown">
                        <div class="auction-img">
                          <img alt="image" src="/images/bg/live-auc2.png" />
                          <div class="auction-timer">
                            <div class="countdown" id="timer2">
                              <h4>
                                <span id="hours2">05</span>H :{" "}
                                <span id="minutes2">52</span>M :{" "}
                                <span id="seconds2">32</span>S
                              </h4>
                            </div>
                          </div>
                          <div class="author-area">
                            <div class="author-emo">
                              <img
                                alt="image"
                                src="/images/icons/smile-emo.svg"
                              />
                            </div>
                            <div class="author-name">
                              <span>by @robatfox</span>
                            </div>
                          </div>
                        </div>
                        <div class="auction-content">
                          <h4>
                            <a href="auction-details.html">
                              Wedding Special Exclusive Cupple Ring (S2022)
                            </a>
                          </h4>
                          <p>
                            Bidding Price : <span>$85.9</span>
                          </p>
                          <div class="auction-card-bttm">
                            <a
                              href="auction-details.html"
                              class="eg-btn btn--primary btn--sm"
                            >
                              Place a Bid
                            </a>
                            <div class="share-area">
                              <ul class="social-icons d-flex">
                                <li>
                                  <a href="https://www.facebook.com/">
                                    <i class="bx bxl-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.twitter.com/">
                                    <i class="bx bxl-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.pinterest.com/">
                                    <i class="bx bxl-pinterest"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.instagram.com/">
                                    <i class="bx bxl-instagram"></i>
                                  </a>
                                </li>
                              </ul>
                              <div>
                                <a href="#" class="share-btn">
                                  <i class="bx bxs-share-alt"></i>
                                </a>
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
