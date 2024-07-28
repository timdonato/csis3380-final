import Link from "next/link";

export default function AuctionItemBlock(props) {
  return (
    <>
      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        className="eg-card auction-card1 wow fadeInDown"
      >
        <div className="auction-img">
          <img alt="image" src={props.imageUrl} />
          <div className="auction-timer">
            <div className="countdown" id="timer1">
              <h4>
                <span id="hours1">05</span>H : <span id="minutes1">52</span>M :{" "}
                <span id="seconds1">32</span>S
              </h4>
            </div>
          </div>
          <div className="author-area">
            <div className="author-emo">
              <img alt="image" src="/images/icons/smile-emo.svg" />
            </div>
            <div className="author-name">
              <span>by @robatfox</span>
            </div>
          </div>
        </div>
        <div className="auction-content">
          <h4>
            <Link href={`items/${props.id}`}>
             {props.description}
            </Link>
          </h4>
          <p>
            Bidding Price : <span>${props.currentPrice}</span>
          </p>
          <div className="auction-card-bttm">
            <Link href={`items/${props.id}`} className="eg-btn btn--primary btn--sm">
              Place a Bid
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
