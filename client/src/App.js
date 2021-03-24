import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchArea from "./components/SearchArea";
import Tickets from "./components/Tickets";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [hiddenTickets, setHiddenTickets] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [restoreTickets, setRestoreTickets] = useState([]);

  async function search(e) {
    const searchText = e.target.value;
    fetchTickets(searchText);
  }

  const fetchTickets = async (searchText) => {
    if (!searchText) searchText = "";
    const res = await axios.get(`/api/tickets?searchText=${searchText}`);
    setTickets(res.data);
    setRestoreTickets(res.data);
  };

  const hide = (event) => {
    const newTickets = tickets.filter(
      (ticket) => ticket._id !== event.target.id
    );
    setTickets(newTickets);
    const newHidden = hiddenTickets.slice();
    newHidden.push(event.target);
    setHiddenTickets(newHidden);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <Header />
      <SearchArea search={search} />
      <Tickets hiddenTickets={hiddenTickets} tickets={tickets} hide={hide} />
      <Footer />
    </div>
  );
}

export default App;
