import Footer from "../components/Footer";

import "../../public/assets/css/all.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/style.css";


export default function App({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps}/>;
      <Footer />
    </>
  );
}
