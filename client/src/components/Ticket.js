import React from "react";

export default function Ticket({ ticket, hide, doneUndone }) {
  const { title, userEmail, content, creationTime, labels, _id, done } = ticket;

  //function the formats creation sime to date format
  const dateFormat = () => {
    const date = new Date(creationTime);
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

  //function for hide button => hidden toggle
  const showHide = (bool) => {
    return (document.getElementById(_id).hidden = bool);
  };

  // function that return string to the class due the situation
  const isDoneClass = () => {
    if (done) {
      return "undone";
    }
    return "done";
  };

  // function that return string to the button text due the situation
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
        <button className="done-btn" onClick={() => doneUndone(_id)}>
          {isDoneClass()}
        </button>
      </h3>
      <p>{content}</p>
      <a className="mail" href={`mailTo:${userEmail}`}>
        <span>{userEmail}</span>
      </a>{" "}
      | <span>{dateFormat()}</span>
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
        <i class="fa fa-eye-slash"></i>
      </span>
    </div>
  );
}
