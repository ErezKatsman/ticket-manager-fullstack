import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function Tickets({ tickets }) {
  return (
    <div>
      {tickets.map((ticket, index) => {
        return <Ticket ticket={ticket} key={index} />;
      })}
    </div>
  );
}
