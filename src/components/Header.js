import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

function Header({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // handle sign out
  const handleSignOut = () => {
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/");
  };

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // handle menu close
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-area">
      <div className="header-logo">
        <Link href="/">
          <img
            src="../assets/images/logo-white.png"
            alt="Auction Hive"
            height="40"
            width="40"
          />
        </Link>
      </div>
      <div className={`main-menu ${isMenuOpen ? 'show-menu' : ''}`}>
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap">
            <Link href="/">
              <img alt="image" src="../assets/images/logo.png" />
            </Link>
          </div>
          <div className="menu-close-btn" onClick={closeMenu}>
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
            <Link href="/contact">Contact Us</Link>
          </li>
          {user && user.username === "superuser" ? (
            <li>
              <Link href="/items/add">Register Item</Link>
            </li>
          ) : null}
          {user ? (
             <li>
              <Link href={`/dashboard/${user.id}`} className="d-lg-none d-block">My Account</Link>
            </li>
          ) : (
            <li>
              <Link href="/signin" className="d-lg-none d-flex">Sign in</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-right d-flex align-items-center">
        <div className="hotline d-xxl-flex d-none">
          <div className="hotline-icon">
            <img alt="image" src="../assets/images/icons/header-phone.svg" />
          </div>
          <div className="hotline-info">
            <span>Click To Call</span>
            <h6>
              <Link href="tel:123-456-789">+123-456-789</Link>
            </h6>
          </div>
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
        &nbsp;&nbsp;
        <div className="eg-btn btn--primary header-btn">
          {user ? (
            <Link href={`/dashboard/${user.id}`}>My Account</Link>
          ) : (
            <Link href="/signin">Sign in</Link>
          )}
        </div>
        <div className="mobile-menu-btn d-lg-none d-block" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
