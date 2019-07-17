const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  category: String,
  suit: String,
  keywords: String,
  description: String,
  img: String
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
