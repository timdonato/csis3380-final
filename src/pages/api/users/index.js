import dbConnect from "../../../../db/dbConnect";
import User from "../../../../db/models/User";

export default async function handler(req, res) {
  await dbConnect();
  console.log(User);

  switch (req.method) {
    case "POST":
      const newUser = await User.create(req.body);

      res.status(201).send(newUser);
      break;

    case "GET":
      const users = await User.find();
      res.send(users);
      break;

    default:
      res.status(404).send();
  }
}
