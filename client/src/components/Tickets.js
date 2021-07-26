import React from "react";
import Ticket from "./Ticket";

export default function Tickets({
  tickets,
  hide,
  hiddenTickets,
  restore,
  doneUndone,
  labelClick,
}) {
  return (
    <div className="tickets-section">
      <span className="counter">
        <span id="hideTicketsCounter">{hiddenTickets.length}</span> hidden
        tickets -{" "}
        <button id="restoreHideTickets" className="restore" onClick={restore}>
          restore
        </button>
      </span>
      <div className="tickets">
        {tickets.map((ticket, index) => {
          if (ticket === "start") return;
          return (
            <Ticket
              doneUndone={doneUndone}
              hide={hide}
              ticket={ticket}
              labelClick={labelClick}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
