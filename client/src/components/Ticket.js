import React from "react";

export default function Ticket({ ticket, hide }) {
  const { title, userEmail, content, creationTime, labels, _id } = ticket;

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

  const showHide = (bool) => {
    return (document.getElementById(_id).hidden = bool);
  };

  return (
    <div
      onMouseOver={() => {
        showHide(false);
      }}
      onMouseOut={() => {
        showHide(true);
      }}
      className="ticket"
    >
      <h3 className="ticket-title">{title}</h3>
      <p>{content}</p>
      <span>{userEmail}</span> | <span>{dateFormat()}</span>
      <div>
        {labels &&
          labels.map((label, index) => {
            return (
              <span className="label" key={index}>
                {label}
              </span>
            );
          })}
      </div>
      <span
        hidden={true}
        id={_id}
        className="hideTicketButton"
        onClick={() => hide(_id)}
      >
        Hide
      </span>
    </div>
  );
}
