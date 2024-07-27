export default function AuctionItemBlock () {
    return (
        <>
        <div data-wow-duration="1.5s" data-wow-delay="0.2s" className="eg-card auction-card1 wow fadeInDown">
            <div className="auction-img">
                <img alt="image" src="/images/bg/live-auc1.png"/>
                <div className="auction-timer">
                <div className="countdown" id="timer1">
                    <h4>
                    <span id="hours1">05</span>H : <span id="minutes1">52</span>M : <span id="seconds1">32</span>S
                    </h4>
                </div>
                </div>
                <div className="author-area">
                <div className="author-emo">
                    <img alt="image" src="/images/icons/smile-emo.svg"/>
                </div>
                <div className="author-name">
                    <span>by @robatfox</span>
                </div>
                </div>
            </div>
            <div className="auction-content">
                <h4>
                <a href="auction-details.html">Brand New royal Enfield 250 CC For Sale</a>
                </h4>
                <p>Bidding Price : <span>$85.9</span>
                </p>
                <div className="auction-card-bttm">
                    <a href="/auction-details" className="eg-btn btn--primary btn--sm">Place a Bid</a>
                </div>
            </div>
        </div>
        </>
    )
}
