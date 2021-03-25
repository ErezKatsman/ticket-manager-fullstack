import React from "react";

export default function Ticket({ ticket, hide, doneUndone }) {
  const { title, userEmail, content, creationTime, labels, _id, done } = ticket;

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

  const isDoneClass = () => {
    if (done) {
      return "undone";
    }
    return "done";
  };

  const isDoneText = () => {
    if (!done) {
      return "undone";
    }
    return "done";
  };

  return (
    <div
      onMouseOver={() => {
        showHide(false);
      }}
      onMouseOut={() => {
        showHide(true);
      }}
      className={`ticket ${isDoneText()}`}
    >
      <h3 className="ticket-title">
        {title}
        <button className="done-btn" onClick={(e) => doneUndone(e, _id)}>
          {isDoneClass()}
        </button>
      </h3>
      <p>{content}</p>
      <span>{userEmail}</span> | <span>{dateFormat()}</span>
      <div className="labels">
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
