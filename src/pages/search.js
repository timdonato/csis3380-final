// src/pages/search.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

function Search({ user }) {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        const response = await fetch(`/api/search?q=${query}`);
        const data = await response.json();
        setResults(data);
      };

      fetchResults();
    }
  }, [query]);

  return (
    <>
      <Header user={user} />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>Search Results for <em>{query}</em></h1>
          </div>
          <div className="col-12">
            
              {results.length > 0 ? (
                results.map((result) => (
                    <div className="row my-3 ">
                        <div className="col-3" key={result._id}>
                            <Link href={`/items/${result._id}`}>
                                <Image
                                src={result.imageUrl}
                                alt={result.itemName}
                                width={250}
                                height={250}
                                />
                            </Link>
                        </div>
                        <div className="col-9" key={result._id}>
                            <Link href={`/items/${result._id}`}><h2>{result.itemName}</h2></Link>
                        </div>
                    
                    </div>
                ))
              ) : (
                <div className="col">
                  <h2>No results found</h2>
                  <div className="eg-btn btn--primary header-btn">
                    <Link href="/">My Account</Link>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../db/models/User");
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
