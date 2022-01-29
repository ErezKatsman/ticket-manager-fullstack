import "./App.css";
import Header from "./components/Header";
import Top from "./components/Top";
import SearchArea from "./components/SearchArea";
import Tickets from "./components/Tickets";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  //hidden tickets arr
  const [hiddenTickets, setHiddenTickets] = useState([]);
  //tickets arr => what actually vied on the screen
  const [tickets, setTickets] = useState(["start"]);
  //resotre tickets arr
  const [restoreTickets, setRestoreTickets] = useState([]);
  //The chosenLabels
  const [chosenLabels, setChosenLabels] = useState([]);

  //function for the onSeatch event in searchArea
  const search = async (e) => {
    const searchText = e.target.value;
    fetchTickets(searchText);
  };

  //function that show the loader
  const loaderShow = () => {
    document.getElementById("loader").hidden = false;
  };

  //function that hide the loader
  const loaderHide = () => {
    document.getElementById("loader").hidden = true;
  };

  // function the fetch the tickets and show them on the screen
  const fetchTickets = async (searchText) => {
    if (!searchText) searchText = "";
    loaderShow();

    const res = await axios.get(
      `/api/tickets?searchText=${searchText}&labels=${chosenLabels.join(",")}`
    );
    let { data } = res;
    const arr = data.filter((el) => !hiddenTickets.includes(el._id));
    loaderHide();
    setTickets(arr);
    setRestoreTickets(data);
  };

  //function for the hide button event in ticket section
  const hide = (ticketId) => {
    const newTickets = tickets.filter((ticket) => ticket._id !== ticketId);
    setTickets(newTickets);
    const newHidden = hiddenTickets.slice();
    newHidden.push(ticketId);
    setHiddenTickets(newHidden);
  };

  //function for the done or undone button
  const doneUndone = (ticketId) => {
    const foundIndex = tickets.findIndex((ticket) => ticket._id === ticketId);
    if (tickets[foundIndex].done) {
      axios.patch(`/api/tickets/${ticketId}/undone`);
    } else {
      axios.patch(`/api/tickets/${ticketId}/done`);
    }
    fetchTickets();
  };

  //function that resores the list
  const restore = () => {
    setTickets(restoreTickets);
    setHiddenTickets([]);
  };

  //handle labels onclick
  const labelClick = (label) => {
    if (chosenLabels.find((chosenLabel) => chosenLabel == label)) {
      setChosenLabels(
        chosenLabels.filter((chosenLabels) => label != chosenLabels)
      );
      return;
    }
    setChosenLabels((prevLabels) => [...prevLabels, label]);
  };

  useEffect(() => {
    fetchTickets();
  }, [chosenLabels]);

  return (
    <div>
      <div id="loader" className="loader"></div>
      <Header />
      <SearchArea
        search={search}
        labelClick={labelClick}
        chosenLabels={chosenLabels}
      />
      {tickets.length === 0 ? (
        <div className="no-results">
          <h1 className="no-result">No results</h1>{" "}
          <i className="fa fa-search fa-5x"></i>
        </div>
      ) : (
        <Tickets
          doneUndone={doneUndone}
          hiddenTickets={hiddenTickets}
          tickets={tickets}
          hide={hide}
          restore={restore}
          labelClick={labelClick}
          chosenLabels={chosenLabels}
        />
      )}
      <Top />
    </div>
  );
}

export default App;
