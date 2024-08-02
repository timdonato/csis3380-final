import Link from "next/link";

export default function AuctionItemBlock(props) {
  return (
    <>
      <div className="eg-card auction-card1"
      >
        <div className="auction-img">
          <img alt="image" src={props.imageUrl} />
          
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
