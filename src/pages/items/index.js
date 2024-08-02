import { useEffect, useState } from "react";
import AuctionItemBlock from "../../components/Auction-Item-Block";
import Header from "../../components/Header";
import Link from "next/link";

export default function LiveAuction({ user }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  // Render pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Header user={user} />
      <div className="inner-banner">
        <div className="container">
          <h2 className="inner-banner-title">Live Auction</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Live Auction
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="live-auction-section pt-120 pb-120">
        <div className="container">
          <div className="row gy-4 mb-60 d-flex justify-content-center">
            {currentItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                <AuctionItemBlock
                  id={item._id}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  currentPrice={item.currentPrice}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <nav className="pagination-wrap">
              <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <Link
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-disabled={currentPage === 1}
                  >
                    Prev
                  </Link>
                </li>
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className={`page-item ${currentPage === number ? 'active' : ''}`}
                  >
                    <Link
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </Link>
                  </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                  <Link
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-disabled={currentPage === pageNumbers.length}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../../db/models/User");
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    const decoded = jwt.verify(token, "CSIS3380Project");
    const user = await User.findById(decoded.id).lean(); // check user on database

    return {
      props: {
        user: user
          ? { id: user._id.toString(), username: user.username }
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
      },
    };
  }
}
