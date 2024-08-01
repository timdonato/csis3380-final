import React from 'react';
import AuctionItemBlock from '../components/Auction-Item-Block';
import Header from "../components/Header"

export default function LiveAuction({user}) {
    return (
        <>
        <Header user={user}/>
        <div className="inner-banner">
            <div className="container">
                <h2 className="inner-banner-title wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".2s">Live Auction</h2>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Live Auction</li>
                </ol>
                </nav>
            </div>
            </div>
            <div className="live-auction-section pt-120 pb-120">
            <img alt="image" src="/images/bg/section-bg.png" className="img-fluid section-bg-top" />
            <img alt="image" src="/images/bg/section-bg.png" className="img-fluid section-bg-bottom" />
            <div className="container">
                <div className="row gy-4 mb-60 d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    <AuctionItemBlock />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="0.4s" className="eg-card auction-card1 wow fadeInDown">
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
                            <img alt="image" src="/images/icons/smile-emo.svg"/>
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
                        
                        </div>
                        
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="0.6s" className="eg-card auction-card1 wow fadeInDown">
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
                        <a href="/auction-details">Brand New Honda CBR 600 RR For Sale (2022)</a>
                        </h4>
                        <p>Bidding Price : <span>$85.9</span>
                        </p>
                        <div className="auction-card-bttm">
                        <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                        
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="0.8s" className="eg-card auction-card1 wow fadeInDown">
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
                        
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="1s" className="eg-card auction-card1 wow fadeInDown">
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
                            <a href="#" className="share-btn">
                                <i className="bx bxs-share-alt"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay=".8s" className="eg-card auction-card1 wow fadeInDown">
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
                        <a href="/auction-details">IPhone 11 Pro Max All Variants Available For Sale</a>
                        </h4>
                        <p>Bidding Price : <span>$85.9</span>
                        </p>
                        <div className="auction-card-bttm">
                            <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                            
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="1.4s" className="eg-card auction-card1 wow fadeInDown">
                    <div className="auction-img">
                        <img alt="image" src="/images/bg/live-auc7.png" />
                        <div className="auction-timer">
                        <div className="countdown" id="timer7">
                            <h4>
                            <span id="hours7">05</span>H : <span id="minutes7">52</span>M : <span id="seconds7">32</span>S
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
                        <a href="/auction-details">Blue ray filter All Variants Available For Sale</a>
                        </h4>
                        <p>Bidding Price : <span>$85.9</span>
                        </p>
                        <div className="auction-card-bttm">
                        <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                       
                        </div>
                    </div>
                    
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="1.6s" className="eg-card auction-card1 wow fadeInDown">
                    <div className="auction-img">
                        <img alt="image" src="/images/bg/live-auc8.png" />
                        <div className="auction-timer">
                        <div className="countdown" id="timer8">
                            <h4>
                            <span id="hours8">05</span>H : <span id="minutes8">52</span>M : <span id="seconds8">32</span>S
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
                        <a href="/auction-details">Pure leather All Variants Available For Sale</a>
                        </h4>
                        <p>Bidding Price : <span>$85.9</span>
                        </p>
                        <div className="auction-card-bttm">
                        <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                        
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 ">
                    {/* Need to change to <AuctionItemBlock /> with dynamic images, title, details, timer, etc */}
                    <div data-wow-duration="1.5s" data-wow-delay="1.2s" className="eg-card auction-card1 wow fadeInDown">
                    <div className="auction-img">
                        <img alt="image" src="/images/bg/live-auc9.png" />
                        <div className="auction-timer">
                        <div className="countdown" id="timer9">
                            <h4>
                            <span id="hours9">05</span>H : <span id="minutes9">52</span>M : <span id="seconds9">32</span>S
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
                        <a href="/auction-details">Water resist All Variants Available For Sale</a>
                        </h4>
                        <p>Bidding Price : <span>$85.9</span>
                        </p>
                        <div className="auction-card-bttm">
                        <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                        
                        </div>
                    </div>
                    </div>
                    {/* end of <AuctionItemBlock /> */}
                </div>
                </div>
                <div className="row">
                <nav className="pagination-wrap">
                    <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                    <li className="page-item">
                        <a className="page-link" href="#" tabindex="-1">Prev</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">01</a>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
            <div className="about-us-counter pb-120">
            <div className="container">
                <div className="row g-4 d-flex justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                    <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                    <div className="counter-icon">
                        <img alt="image" src="/images/icons/employee.svg" />
                    </div>
                    <div className="coundown d-flex flex-column">
                        <h3 className="odometer" data-odometer-final="5400">&nbsp;</h3>
                        <p>Happy Customer</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                    <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <div className="counter-icon">
                        <img alt="image" src="/images/icons/review.svg" />
                    </div>
                    <div className="coundown d-flex flex-column">
                        <h3 className="odometer" data-odometer-final="1250">&nbsp;</h3>
                        <p>Good Reviews</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                    <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                    <div className="counter-icon">
                        <img alt="image" src="/images/icons/smily.svg" />
                    </div>
                    <div className="coundown d-flex flex-column">
                        <h3 className="odometer" data-odometer-final="4250">&nbsp;</h3>
                        <p>Winner Customer</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 col-10">
                    <div className="counter-single text-center d-flex flex-row hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".8s">
                    <div className="counter-icon">
                        <img alt="image" src="/images/icons/comment.svg" />
                    </div>
                    <div className="coundown d-flex flex-column">
                        <h3 className="odometer" data-odometer-final="500">&nbsp;</h3>
                        <p>New Comments</p>
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