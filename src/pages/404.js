import React from "react";
import Link from "next/link";

import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header user="user"/>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="eg-btn btn--primary btn--md">Go to Home</Link>
      </div>
    </>
  );
}



export default NotFound;
