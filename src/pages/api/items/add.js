import dbConnect from "../../../../db/dbConnect";
import Item from "../../../../db/models/Item";
import Bid from "../../../../db/models/Bid";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "POST":
      const newItem = await Item.create(req.body);
      const newBid = await Bid.create({
        item: newItem._id,
        message: "make a bid!",
      });

      res.status(201).send({ newItem, newBid });
      break;

    case "GET":

    default:
      res.status(404).send();
  }
}
