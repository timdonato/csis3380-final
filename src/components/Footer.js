
function Footer() {
  return (
    <footer>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                <p>&copy; 2024 <a href="#">AuctionHive Bidding App</a> 
                </p>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
                <p className="d-sm-flex d-none">We Accepts:</p>
                <ul className="footer-logo-list">
                  <li>
                    <a href="#">
                      <img alt="image" src="../assets/images/bg/footer-pay1.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src="../assets/images/bg/footer-pay2.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src="../assets/images/bg/footer-pay3.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src="../assets/images/bg/footer-pay4.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="image" src="../assets/images/bg/footer-pay5.png" />
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
