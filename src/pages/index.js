import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

// user
import jwt from "jsonwebtoken";
import User from "../../db/models/User";

// import getUserFromToken from "../../db/token";

export default function Home({ user }) {
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/signin");
  };

  return (
    <>
      <h1 className={styles.main}>Hello {user ? user.username : ""}</h1>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <Link href="/signin">Sign In</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </>
  );
}
// export async function getServerSideProps(context) {
//   const { req } = context;
//   const token = req.cookies.authToken || '';

//   const user = await getUserFromToken(token);

//   return {
//     props: {
//       user,
//     },
//   };
// }

// to check signed in
export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean(); // check user on database

    return {
      props: {
        user: user ? { username: user.username } : null,
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
