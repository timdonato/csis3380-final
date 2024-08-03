// src/pages/search.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

function Search() {
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
        <h1>Search Results for "{query}"</h1>
        {results.length > 0 ? (
            <ul>
            {results.map((result) => (
                <li key={result._id}>
                <Link href={`/items/${result._id}`}>
                    <a>
                    <Image src={result.image} alt={result.itemName} width={100} height={100} />
                    <span>{result.itemName}</span>
                    </a>
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
