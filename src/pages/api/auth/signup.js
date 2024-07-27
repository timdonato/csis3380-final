import dbConnect from "../../../../db/dbConnect";
import User from "../../../../db/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end(); 

  await dbConnect();

  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password !== confirmPassword){
    return res.status(400).json({ message: "Password doesn't match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
