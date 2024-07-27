import dbConnect from "../../../../db/dbConnect";
import Item from "../../../../db/models/Item";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      const newItem = await Item.create(req.body);

      res.status(201).send(newItem);
      break;

    case "GET":
      const items = await Item.find();
      res.send(items);
      break;

    default:
      res.status(404).send();
  }
}
