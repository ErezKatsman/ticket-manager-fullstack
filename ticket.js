const { Router } = require("express");
const Ticket = require("./ticketModel");
const ticket = Router();

// get request from api/tickets with query params
ticket.get("/", (req, res) => {
  const { searchText, labels } = req.query;
  console.log(labels);
  console.log(searchText);
  let arr = [];
  if (labels) {
    arr = labels.split(",");
    console.log(arr);
    return Ticket.find({
      $and: [{ title: new RegExp(searchText, "i") }, { labels: { $all: arr } }],
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.status(500).json({ message: "oops... something went wrong" });
      });
  }
  console.log(arr);
  Ticket.find({
    title: new RegExp(searchText, "i"),
  })
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "oops... something went wrong" });
    });
});

// patch request from api/tickets to done ticket
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
      return res.status(500).json({ err: "oops... something went wrong" });
    });
});

// patch request from api/tickets to undone ticket
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
      return res.status(500).json({ err: "oops... something went wrong" });
    });
});

// ticket.get("/labels", (req, res) => {
//   const { labels } = req.query;
//   console.log(labels);
//   Ticket.find({ labels: [labels] }).then((tickets) => {
//     res.status(200).json(tickets);
//   });
// });

module.exports = ticket;
