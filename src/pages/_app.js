import Script from "next/script";

import Footer from "../components/Footer";

import "../../public/assets/css/all.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
// import "../../public/assets/css/jquery-ui.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/odometer.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/style.css";

// import "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
// import "../../public/assets/js/jquery-ui.js";
// import "../../public/assets/js/bootstrap.bundle.min.js";
import "../../public/assets/js/swiper-bundle.min.js";
// import "../../public/assets/js/slick.js";
// import "../../public/assets/js/jquery.nice-select.js";
// import "../../public/assets/js/odometer.min.js";
// import "../../public/assets/js/viewport.jquery.js";
// import "../../public/assets/js/jquery.magnific-popup.min.js";
// import "../../public/assets/js/main.js";


// import './assets/js/wow.min.js';
// import "@/styles/globals.css";

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
      <Component {...pageProps}/>;
      <Footer />
    </>
  );
}
