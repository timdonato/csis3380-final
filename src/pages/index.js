import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Header from "../components/Header"

// import getUserFromToken from "../../db/token";

export default function Home({ user }) {
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/");
  };

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/signin');
  //   }
  // }, [user, router]);

  return (
    <>
    <Header user={user}/>
    <>
    <div className="hero-area hero-style-one">
      <div className="hero-main-wrapper position-relative">
        <div className="swiper banner1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slider-bg-1">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-10 col-lg-10">
                      <div className="banner1-content">
                        <span>Welcome To Auction House</span>
                        <h1>Build, sell & collect digital items.</h1>
                        <p>Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam dapibus on erat in dolor posuere, none hendrerit lectus ornare. Suspendisse sit amet turpina sagittis, ultrices dui et, aliquam none hendrerit lectus. </p>
                        <a href="/items" className="eg-btn btn--primary btn--lg">Start Exploring</a>
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
      <img alt="image" src="/images/bg/section-bg.png" className="img-fluid section-bg" />
      <div className="container position-relative">
        <img alt="image" src="/images/bg/dotted1.png" className="dotted1" />
        <img alt="image" src="/images/bg/dotted1.png" className="dotted2" /> 
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Live Auction</h2>
              <p className="mb-0">Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
            </div>
          </div>
        </div>
        <div className="row gy-4 mb-60 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay="0.2s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc1.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer1">
                    <h4>
                      <span id="hours1">05</span>H : <span id="minutes1">52</span>M : <span id="seconds1">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">Brand New royal Enfield 250 CC For Sale</a>
                </h4>
                <p>Bidding Price : <span>
                    <span>$85.9</span>
                  </span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay="0.4s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc2.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer2">
                    <h4>
                      <span id="hours2">05</span>H : <span id="minutes2">52</span>M : <span id="seconds2">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">Wedding Special Exclusive Cupple Ring (S2022)</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay="0.6s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc3.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer3">
                    <h4>
                      <span id="hours3">05</span>H : <span id="minutes3">52</span>M : <span id="seconds3">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">Brand New Honda CBR 600 RR For Special Sale (2022)</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay=".2s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc4.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer4">
                    <h4>
                      <span id="hours4">05</span>H : <span id="minutes4">52</span>M : <span id="seconds4">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">Toyota AIGID A Class Hatchback Sale (2017 - 2021)</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay=".4s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc5.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer5">
                    <h4>
                      <span id="hours5">05</span>H : <span id="minutes5">52</span>M : <span id="seconds5">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">Havit HV-G61 USB Black Double Game Pad With Vibrat</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 ">
            <div data-wow-duration="1.5s" data-wow-delay=".4s" className="eg-card auction-card1 wow animate fadeInDown">
              <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc6.png" />
                <div className="auction-timer">
                  <div className="countdown" id="timer6">
                    <h4>
                      <span id="hours6">05</span>H : <span id="minutes6">52</span>M : <span id="seconds6">32</span>S
                    </h4>
                  </div>
                </div>
                <div className="author-area">
                  <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg" />
                  </div>
                  <div className="author-name">
                    <span>by @robatfox</span>
                  </div>
                </div>
              </div>
              <div className="auction-content">
                <h4>
                  <a href="/auction-details">IPhone 11 Pro Max All Variants Available For Special Sale</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                  <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                  <div className="share-area">
                    <ul className="social-icons d-flex">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="share-btn">
                        <i className="bx bxs-share-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <a href="/live-auction" className="eg-btn btn--primary btn--md mx-auto">View All</a>
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

// to check signed in
// export async function getServerSideProps(context) {
//   const { default: User } = await import('../../db/models/User');

//   const { req } = context;
//   const token = req.cookies.authToken || '';

//   const user = await getUserFromToken(token);

//   return {
//     props: {
//       user,
//     },
//   };
// }