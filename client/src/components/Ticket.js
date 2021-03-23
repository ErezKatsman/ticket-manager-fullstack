import React from "react";

export default function Ticket({ ticket }) {
  const { title, userEmail, content, done, creationTime, labels } = ticket;

  const date = new Date(creationTime);
  const dateFormat = () => {
    return (
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear() +
      ", " +
      (date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()) +
      ":" +
      (date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":" +
      (date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds()) +
      " " +
      (date.getHours() < 12 ? "AM" : "PM")
    );
  };

  return (
    <div className="ticket">
      <h3>{title}</h3>
      <p>{content}</p>
      <span>{userEmail}</span> | <span>{dateFormat()}</span>
      <div>
        {labels.map((label, index) => {
          return <span key={index}>{label}</span>;
        })}
      </div>
    </div>
  );
}
