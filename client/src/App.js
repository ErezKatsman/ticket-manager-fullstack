import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchArea from "./components/SearchArea";
import Tickets from "./components/Tickets";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await axios.get("/api/tickets");
    console.log(res);
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <Header />
      <SearchArea />
      <Tickets tickets={tickets} />
      <Footer />
    </div>
  );
}

export default App;
