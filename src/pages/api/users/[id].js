import dbConnect from "../../../../db/dbConnect";
import User from "../../../../db/models/User";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "PUT":
      res.send("modify user");
      break;

    case "GET":
      const user = await User.findById(id);
      res.send(user);
      break;

    default:
      res.send();
      break;
  }
}
