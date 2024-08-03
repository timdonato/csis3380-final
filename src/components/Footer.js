import Link from "next/link";
import Image from 'next/image';

function Footer() {
  return (
    <footer>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <p>&copy; 2024 <Link href="#">AuctionHive Bidding App</Link> 
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                <p className="d-sm-flex d-none">We Accepts:</p>
                <ul className="footer-logo-list">
                  <li>
                    <Link href="#">
                      <Image alt="image" src="/assets/images/bg/footer-pay1.png" width={40} height={36} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image alt="image" src="/assets/images/bg/footer-pay2.png" width={40} height={36} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image alt="image" src="/assets/images/bg/footer-pay3.png" width={40} height={36} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image alt="image" src="/assets/images/bg/footer-pay4.png" width={40} height={36} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image alt="image" src="/assets/images/bg/footer-pay5.png" width={40} height={36} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
