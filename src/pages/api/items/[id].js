import dbConnect from "../../../../db/dbConnect";
import Item from "../../../../db/models/Item";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  const item = await Item.findById(id);

  switch (req.method) {
    case "PUT":
      try {
        const updatedPrice = await Item.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!updatedPrice) {
          return res.status(404).send({ error: "Item not found" });
        }
        res.send(updatedPrice);
      } catch (error) {
        res.status(400).send({ error: "Failed to update item" });
      }
      break;

    case "GET":
      res.send(item);
      break;

    default:
      res.send();
      break;
  }
}
