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
    let { data } = res;
    const arr = data.filter((el) => !hiddenTickets.includes(el._id));
    console.log(arr);
    setTickets(arr);
    setRestoreTickets(data);
  };

  const hide = (ticketId) => {
    const newTickets = tickets.filter((ticket) => ticket._id !== ticketId);
    setTickets(newTickets);
    const newHidden = hiddenTickets.slice();
    newHidden.push(ticketId);
    setHiddenTickets(newHidden);
  };

  const restore = () => {
    setTickets(restoreTickets);
    setHiddenTickets([]);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <Header />
      <SearchArea search={search} />
      <Tickets
        hiddenTickets={hiddenTickets}
        tickets={tickets}
        hide={hide}
        restore={restore}
      />
      <Footer />
    </div>
  );
}

export default App;
