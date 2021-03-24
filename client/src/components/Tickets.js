import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function Tickets({ tickets, hide, hiddenTickets, restore }) {
  return (
    <div className="tickets-section">
      <span className="counter">
        <span id="hideTicketsCounter">{hiddenTickets.length}</span> hidden
        tickets -{" "}
        <button id="restoreHideTickets" onClick={restore}>
          restore
        </button>
      </span>
      <div className="tickets">
        {tickets.map((ticket, index) => {
          return <Ticket hide={hide} ticket={ticket} key={index} />;
        })}
      </div>
    </div>
  );
}
