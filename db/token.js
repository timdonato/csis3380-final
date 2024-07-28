import jwt from "jsonwebtoken";

export default async function getUserFromToken(token) {
  const { default: User } = await import("./models/User");
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
