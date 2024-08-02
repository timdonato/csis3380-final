import dbConnect from "../../../../../db/dbConnect";
import Item from "../../../../../db/models/Item";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  // Ensure item ID is provided
  if (!id) {
    return res.status(400).send({ error: "Item ID is required" });
  }

  try {
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).send({ error: "Item not found" });
    }

    
    switch (req.method) {
      case "POST":
        // update price
        const { itemName, description, imageUrl, endTime  } = req.body;

        const updatedInfo = await Item.findByIdAndUpdate(
          id,
          { itemName, description, imageUrl, endTime },
          { new: true }
        );

        if (!updatedInfo) {
          return res.status(404).send({ error: "Failed to update item" });
        }
        
        // send respond
        res.status(200).json({ updatedInfo });
        break;

      case "GET":
        res.status(200).json({ item });
        break;

        
      default:
        res.status(405).send({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
}
