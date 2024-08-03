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
      <div className="search-results">
        <h1>
          Search Results for <em>{query}</em>
        </h1>
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result._id}>
                <Link href={`/items/${result._id}`}>
                    <Image
                      src={result.imageUrl}
                      alt={result.itemName}
                      width={100}
                      height={100}
                    />
                    <span>{result.itemName}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
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
