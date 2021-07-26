import React from "react";
import SearchLabels from "./SearchLabels";

export default function SearchArea({ search, tickets, labelClick }) {
  let labelsFromTickets = tickets.map((ticket) => ticket.labels);
  labelsFromTickets = [].concat(...labelsFromTickets);
  let labelsArray = [...new Set(labelsFromTickets)];

  return (
    <div className="search-area">
      <input id="searchInput" onChange={search} placeholder="search"></input>
      <SearchLabels
        labelsArray={labelsArray}
        labelClick={labelClick}
        tickets={tickets}
      />
    </div>
  );
}
