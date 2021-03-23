import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function Tickets({ tickets }) {
  return (
    <div>
      {tickets.map((t, index) => {
        console.log(t.title);
        return <Ticket ticket={t.title} key={index} />;
      })}
    </div>
  );
}
