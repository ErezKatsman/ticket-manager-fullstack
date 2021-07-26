import React, { useState } from "react";

export default function SearchLabels({ chosenLabels, labelClick }) {
  const [labels, setLabels] = useState([
    "Corvid",
    "Api",
    "Guidelines",
    "Collapse",
    "Expand",
    "Login",
    "Problem",
    "Tutorial",
    "View Count",
  ]);
  return (
    <div className="labels_search">
      {labels.map((label, i) => {
        if (chosenLabels.find((chosenLabel) => chosenLabel == label))
          return (
            <button
              className="label chosen_label"
              key={i}
              onClick={() => labelClick(label)}
            >
              {label}
            </button>
          );
        return (
          <button className="label" key={i} onClick={() => labelClick(label)}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
