import mongoose from "mongoose";

const BidSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    message: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Bid = mongoose.models["Bid"] || mongoose.model("Bid", BidSchema);

export default Bid;
