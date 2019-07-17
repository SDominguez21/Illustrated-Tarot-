const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spreadSchema = new Schema(
  {
    type: String,
    cards: [String],
    user: String,
    comments: [
      {
        note: String,
        time: { type: Date, default: Date.now }
      }
    ]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Spread = mongoose.model("Spread", spreadSchema);

module.exports = Spread;
