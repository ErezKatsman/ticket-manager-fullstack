import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchArea from "./components/SearchArea";
import Tickets from "./components/Tickets";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [tickets, setTickets] = useState([]);

  async function show(e) {
    const searchText = e.target.value;
    fetchTickets(searchText);
  }

  const fetchTickets = async (searchText) => {
    if (!searchText) searchText = "";
    const res = await axios.get(`/api/tickets?searchText=${searchText}`);
    setTickets(res.data);
    console.log(tickets.length);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <Header />
      <SearchArea show={show} />
      <Tickets tickets={tickets} />
      <Footer />
    </div>
  );
}

export default App;
