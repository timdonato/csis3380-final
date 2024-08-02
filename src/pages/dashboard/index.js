import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link';

import Header from "../../components/Header";

function Dashboard({ user }) {

  const router = useRouter();

  const handleSignOut = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/");
  };

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);
  return (
    <>
      <Header user={user} />
      <div className="inner-banner">
        <div className="container">
          <h2 className="inner-banner-title" >
            {user.username}'s Dashboard
          </h2>
          <Link href={`dashboard/${user.id}`}>Link</Link>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="dashboard-section pt-120 pb-120">
        
       
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills gap-4 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active nav-btn-style mx-auto  mb-20"
                  id="v-pills-dashboard-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-dashboard"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-dashboard"
                  aria-selected="true"
                >
                  
                  Dashboard{" "}
                </button>
                <button
                  className="nav-link nav-btn-style mx-auto mb-20"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  
                  My Profile{" "}
                </button>
                <button
                  className="nav-link nav-btn-style mx-auto mb-20"
                  id="v-pills-order-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-order"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-order"
                  aria-selected="true"
                >
                 
                  Order Bidding{" "}
                </button>
                <button
                  className="nav-link nav-btn-style mx-auto"
                  id="v-pills-purchase-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-purchase"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-purchase"
                  aria-selected="true"
                >
                 
                  Purchase{" "}
                </button>
                <button
                  onClick={handleSignOut}
                  className="nav-link nav-btn-style mx-auto"
                  type="button"
                  role="tab"
                >
                  
                  Logout{" "}
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-dashboard-tab"
                >
                  <div className="dashboard-area box--shadow">
                    <div className="row g-4">
                      <div className="col-md-6 col-sm-6">
                        <div className="dashboard-card">
                          <div className="header">
                            <h5>Order Pending</h5>
                          </div>
                          <div className="body">
                            <div className="counter-item">
                              <h2>00</h2>
                            </div>
                            <div className="icon">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div
                          className="dashboard-card hover-border1 wow fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay=".4s"
                        >
                          <div className="header">
                            <h5>Order Processign</h5>
                          </div>
                          <div className="body">
                            <div className="counter-item">
                              <h2>200</h2>
                            </div>
                            <div className="icon">
                              <svg
                                width="46"
                                height="48"
                                viewBox="0 0 46 48"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div
                          className="dashboard-card hover-border1 wow fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay=".6s"
                        >
                          <div className="header">
                            <h5>Order Picked</h5>
                          </div>
                          <div className="body">
                            <div className="counter-item">
                              <h2>160</h2>
                            </div>
                            <div className="icon">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div
                          className="dashboard-card hover-border1 wow fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay=".8s"
                        >
                          <div className="header">
                            <h5>Order Completed</h5>
                          </div>
                          <div className="body">
                            <div className="counter-item">
                              <h2>2200</h2>
                            </div>
                            <div className="icon">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="dashboard-profile">
                    <div className="owner">
                      <div className="image">
                        <img alt="image" src="/images/bg/pro-pic.png" />
                      </div>
                      <div className="content">
                        <h3>Johan Martin SR-</h3>
                        <p className="para">Johan Martin SR-</p>
                      </div>
                    </div>
                    <div className="form-wrapper">
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Frist Name *</label>
                              <input
                                type="text"
                                placeholder="Your first name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Last Name *</label>
                              <input type="text" placeholder="Your last name" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Contact Number</label>
                              <input type="text" placeholder="+8801" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Email</label>
                              <input type="text" placeholder="Your Email " />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-inner">
                              <label>Address</label>
                              <input type="text" name="message" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>City</label>
                              <select id="city">
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Chittagong</option>
                                <option>Rajshahi</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>State</label>
                              <select name="state" id="state">
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Chittagong</option>
                                <option>Rajshahi</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Zip Code</label>
                              <input type="text" placeholder="00000" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12 col-md-6">
                            <div className="form-inner">
                              <label>Country</label>
                              <select>
                                <option>Bangladesh</option>
                                <option>Afganistan</option>
                                <option>India</option>
                                <option>China</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-inner">
                              <label>Password *</label>
                              <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Create A Password"
                              />
                              <i
                                className="bi bi-eye-slash"
                                id="togglePassword"
                              ></i>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-inner mb-0">
                              <label>Confirm Password *</label>
                              <input
                                type="password"
                                name="password"
                                id="password2"
                                placeholder="Create A Password"
                              />
                              <i
                                className="bi bi-eye-slash"
                                id="togglePassword2"
                              ></i>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="button-group">
                              <button
                                type="submit"
                                className="eg-btn profile-btn"
                              >
                                Update Profile
                              </button>
                              <button className="eg-btn cancel-btn">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-order"
                  role="tabpanel"
                  aria-labelledby="v-pills-order-tab"
                >
                  <div className="table-title-area">
                    <h3>Order Bidding List</h3>
                    <select>
                      <option value="01">Show: Last 05 Order</option>
                      <option value="02">Show: Last 03 Order</option>
                      <option value="03">Show: Last 15 Order</option>
                      <option value="04">Show: Last 20 Order</option>
                    </select>
                  </div>
                  <div className="table-wrapper">
                    <table className="eg-table order-table table mb-0">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Bidding ID</th>
                          <th>Bid Amount(USD)</th>
                          <th>Highest Bid</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order1.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order2.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order3.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order4.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order1.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order1.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$1222.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order2.png" />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$6622.8955</td>
                          <td data-label="Status" className="text-red">
                            Reject
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn red">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order3.png" />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$9022.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order4.png" />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$9022.8955</td>
                          <td data-label="Status" className="text-red">
                            Reject
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn red">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order5.png" />
                          </td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Highest Bid">$9022.8955</td>
                          <td data-label="Status" className="text-green">
                            Approved
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-pagination">
                    <p>Showing 10 to 20 of 1 entries</p>
                    <nav className="pagination-wrap">
                      <ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
                        <li className="page-item">
                          <a className="page-link" href="#" tabindex="-1">
                            Prev
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
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
                <div
                  className="tab-pane fade"
                  id="v-pills-purchase"
                  role="tabpanel"
                  aria-labelledby="v-pills-purchase-tab"
                >
                  <div className="table-title-area">
                    <h3>All Purchase</h3>
                    <select id="order-category">
                      <option value="01">Show: Last 05 Order</option>
                      <option value="02">Show: Last 03 Order</option>
                      <option value="03">Show: Last 15 Order</option>
                      <option value="04">Show: Last 20 Order</option>
                    </select>
                  </div>
                  <div className="table-wrapper">
                    <table className="eg-table order-table table mb-0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Bidding ID</th>
                          <th>Bid Amount(USD)</th>
                          <th>Image</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Title">Auction Title 01</td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Image">
                            <img
                              alt="image"
                              src="/images/bg/order1.png"
                              className="img-fluid"
                            />
                          </td>
                          <td data-label="Status" className="text-green">
                            Successfully
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Title">Auction Title 02</td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order2.png" />
                          </td>
                          <td data-label="Status" className="text-green">
                            Successfully
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Title">Auction Title 03</td>
                          <td data-label="Bidding ID">Bidding_HvO253gT</td>
                          <td data-label="Bid Amount(USD)">1222.8955</td>
                          <td data-label="Image">
                            <img alt="image" src="/images/bg/order3.png" />
                          </td>
                          <td data-label="Status" className="text-green">
                            Cancel
                          </td>
                          <td data-label="Action">
                            <button className="eg-btn action-btn green">
                              <img
                                alt="image"
                                src="/images/icons/aiction-icon.svg"
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-pagination">
                    <p>Showing 10 to 20 of 1 entries</p>
                    <nav className="pagination-wrap">
                      <ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
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

export default Dashboard;
