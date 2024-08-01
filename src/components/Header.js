import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

// user
import jwt from "jsonwebtoken";

function Header({ user }) {
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/");
  };

  // useEffect(() => {
  //   if (!user) {
  //   }
  // }, [user,]);

  return (
    <header className="header-area style-1">
      <div className="header-logo">
        <Link href="/">
          <img alt="image" src="../assets/images/bg/header-logo.png" />
        </Link>
      </div>
      <div className="main-menu">
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap">
            <Link href="/">
              <img alt="image" src="../assets/images/bg/header-logo.png" />
            </Link>
          </div>
          <div className="menu-close-btn">
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
        <ul className="menu-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/items">Browse Products</Link>
          </li>
          <li>
            <Link href="/items/add">Register Item</Link>
          </li>
          {/* <li className="menu-item-has-children">
            <Link href="#">Account</Link>
            <i className="bx bx-plus dropdown-icon"></i>
            <ul className="submenu">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/signin">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="d-lg-none d-block">
          <form className="mobile-menu-form mb-5">
            <div className="input-with-btn d-flex flex-column">
              <input type="text" placeholder="Search here..." />
              <button type="submit" className="eg-btn btn--primary btn--sm">
                Search
              </button>
            </div>
          </form>
          <div className="hotline two">
            <div className="hotline-info">
              <span>Click To Call</span>
              <h6>
                <a href="tel:347-274-8816">+347-274-8816</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-right d-flex align-items-center">
        <div className="hotline d-xxl-flex d-none">
          <div className="hotline-icon">
            <img alt="image" src="../assets/images/icons/header-phone.svg" />
          </div>
          <div className="hotline-info">
            <span>Click To Call</span>
            <h6>
              <a href="tel:123-456-789">+123-456-789</a>
            </h6>
          </div>
        </div>
        <div className="search-btn">
          <i className="bi bi-search"></i>
        </div>
        {user ? (
          <div
            onClick={handleSignOut}
            className="eg-btn btn--primary header-btn"
          >
            Sign out
          </div>
        ) : (
          <div />
        )}
        <div className="eg-btn btn--primary header-btn">
          {user ? (
            <Link href="/dashboard">My Account</Link>
          ) : (
            <Link href="/signin">Sign in</Link>
          )}
        </div>
        <div className="mobile-menu-btn d-lg-none d-block">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
