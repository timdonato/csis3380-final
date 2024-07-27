import "@/styles/globals.css";
import Script from "next/script";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/css/all.css";
import "../assets/css/animate.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-icons.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/nice-select.css";
import "../assets/css/odometer.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/style.css";

// import "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
import "../assets/js/jquery-ui.js";
import "../assets/js/bootstrap.bundle.min.js";
// import './assets/js/wow.min.js';
import "../assets/js/swiper-bundle.min.js";
import "../assets/js/slick.js";
import "../assets/js/jquery.nice-select.js";
import "../assets/js/odometer.min.js";
import "../assets/js/viewport.jquery.js";
import "../assets/js/jquery.magnific-popup.min.js";
import "../assets/js/main.js";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        strategy="beforeInteractive" // Load before interactive elements
        onLoad={() => {
          // jQuery is available here
          console.log('jQuery loaded');
        }}
      />
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
