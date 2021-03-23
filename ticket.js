const { Router } = require("express");
const Ticket = require("./ticketModel");
const ticket = Router();

ticket.get("/", (req, res) => {
  const { searchText } = req.query;
  Ticket.find({ title: new RegExp(searchText, "i") })
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "ops... something went wrong" });
    });
});

ticket.patch("/:ticketId/done", (req, res) => {
  const { ticketId } = req.params;
  return Ticket.findByIdAndUpdate(ticketId, { done: true })
    .then((data) => {
      if (!data) return res.status(404).json({ err: "cannot find ticket" });
      return res.json({ updated: true });
    })
    .catch((err) => {
      if (err.name === "CastError")
        return res.status(400).json({ err: "invalid Id" });
      return res.status(500).json({ err: "ops... something went wrong" });
    });
});

ticket.patch("/:ticketId/undone", (req, res) => {
  const { ticketId } = req.params;
  return Ticket.findByIdAndUpdate(ticketId, { done: false })
    .then((data) => {
      if (!data) return res.status(404).json({ err: "cannot find ticket" });
      return res.json({ updated: true });
    })
    .catch((err) => {
      console.log(err.message);
      if (err.name === "CastError")
        return res.status(400).json({ err: "invalid Id" });
      return res.status(500).json({ err: "ops... something went wrong" });
    });
});

module.exports = ticket;
