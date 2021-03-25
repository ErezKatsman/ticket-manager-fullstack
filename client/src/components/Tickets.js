import React from "react";
import Ticket from "./Ticket";

export default function Tickets({
  tickets,
  hide,
  hiddenTickets,
  restore,
  sort,
  doneUndone,
}) {
  return (
    <div className="tickets-section">
      <span className="counter">
        <span id="hideTicketsCounter">{hiddenTickets.length}</span> hidden
        tickets -{" "}
        <button id="restoreHideTickets" onClick={restore}>
          restore
        </button>
        <button onClick={sort}></button>
      </span>
      <div className="tickets">
        {tickets.map((ticket, index) => {
          return (
            <Ticket
              doneUndone={doneUndone}
              hide={hide}
              ticket={ticket}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
