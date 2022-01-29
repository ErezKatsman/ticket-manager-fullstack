const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  title: {
    type: String,
    requie: true,
  },
  content: { type: String, requie: true },
  userEmail: { type: String, requie: true },
  done: { type: Boolean, default: false },
  creationTime: { type: Date, require: true },
  labels: { type: [String], require: false },
});

module.exports = mongoose.model("Ticket", TicketSchema);
