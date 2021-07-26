import React from "react";

export default function SearchLabels({ labelsArray, labelClick, tickets }) {
  if (tickets[0] === "start") return <></>;
  return (
    <div>
      {labelsArray.map((label, i) => (
        <button className="label" key={i} onClick={() => labelClick(label)}>
          {label}
        </button>
      ))}
      <button className="label" onClick={() => labelClick("All")}>
        All
      </button>
    </div>
  );
}
