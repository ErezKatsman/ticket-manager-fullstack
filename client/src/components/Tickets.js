import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function Tickets({ tickets, hide, hiddenTickets }) {
  return (
    <div>
      <span id="hideTicketsCounter">{hiddenTickets.length}</span>
      {tickets.map((ticket, index) => {
        return <Ticket hide={hide} ticket={ticket} key={index} />;
      })}
    </div>
  );
}
