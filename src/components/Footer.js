import footerPay1 from '../../public/assets/images/bg/footer-pay1.png';
import footerPay2 from '../../public/assets/images/bg/footer-pay2.png';
import footerPay3 from '../../public/assets/images/bg/footer-pay3.png';
import footerPay4 from '../../public/assets/images/bg/footer-pay4.png';
import footerPay5 from '../../public/assets/images/bg/footer-pay5.png';


function Footer() {
  return (
    <footer>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <p>Copyright 2024 <a href="#">Bidding App</a> 
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                <p className="d-sm-flex d-none">We Accepts:</p>
                <ul className="footer-logo-list">
                  <li>
                    <a href="#">
                      <img alt="image" src={footerPay1} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src={footerPay2} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src={footerPay3} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src={footerPay4} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src={footerPay5} />
                    </a>
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
