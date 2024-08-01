import dbConnect from "../../../../db/dbConnect";
import User from "../../../../db/models/User";
import Item from "../../../../db/models/Item";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PUT":
      res.send("modify user");
      break;

    case "GET":
      try {
        // Find the user and populate their getItem field
        const user = await User.findById(id).populate("getItem").lean();

        if (!user) {
          return res.status(404).send({ error: "User not found" });
        }
        const items = user.getItem;
        res.status(200).json({ items });
      } catch (error) {
        console.error("Server error:", error);
        res.status(500).send({ error: "Internal server error" });
      }

      break;

    default:
      res.send();
      break;
  }
}
