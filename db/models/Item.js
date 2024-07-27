import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    endTime:{ type: Date },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.models["Item"] || mongoose.model("Item", ItemSchema);

export default Item;
