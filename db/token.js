import jwt from "jsonwebtoken";
import User from "./models/User";

export default async function getUserFromToken(token) {
  try {
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean();

    return user ? { username: user.username } : null;
  } catch (error) {
    console.error("Error fetching user from token:", error);
    return null;
  }
}
