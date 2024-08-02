import dbConnect from "../../../../db/dbConnect";
import Item from "../../../../db/models/Item";
import User from "../../../../db/models/User";
import Bid from "../../../../db/models/Bid";
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
      case "PUT":
        // update price
        const { currentPrice } = req.body;

        if (currentPrice <= item.currentPrice) {
          return res
            .status(400)
            .send({ error: "New price must be higher than the current price" });
        }

        const updatedPrice = await Item.findByIdAndUpdate(
          id,
          { currentPrice },
          { new: true }
        );

        if (!updatedPrice) {
          return res.status(404).send({ error: "Failed to update item" });
        }

        // check user
        const token = req.cookies.authToken || "";
        let username = "Unknown User";
        let userId;

        try {
          if (token) {
            const decoded = jwt.verify(token, "CSIS3380Project");
            const user = await User.findById(decoded.id).lean();
            username = user ? user.username : "Unknown User";
            userId = user ? user._id : null;
          }
        } catch (error) {
          console.error("Error decoding token:", error);
        }

        // update message
        const updateMessage = await Bid.findOneAndUpdate(
          { item: updatedPrice._id },
          {
            $push: { message: `${username} placed a bid of $${currentPrice}` },
          },
          { new: true, upsert: true } // Ensure document is created if not found
        );

        // update user item
        if (userId) {
          await User.findByIdAndUpdate(
            userId,
            { $addToSet: { getItem: updatedPrice._id } } // Add item to array if not already present
          );
        }
        await User.updateMany(
          { _id: { $ne: userId } },
          { $pull: { getItem: updatedPrice._id } } // Remove item from array if present
        );

        
        // send respond
        res.status(200).json({ updatedPrice, updateMessage });
        break;

      case "GET":
        const bids = await Bid.find({ item: id }).lean();

        res.status(200).json({ item, bids });
        break;

      case "DELETE":
        const deleteItem = await Item.findByIdAndDelete(id);
        const deleteBid = await Bid.deleteMany({ item: id }).lean();

        if (!deleteItem || !deleteBid) {
          // If no document was found, return a 404 Not Found response
          return res.status(404).json({ message: 'Item or Bid not found' });
        }
        res.status(200).json({ message: 'Item successfully deleted' });

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
