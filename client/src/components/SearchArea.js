import React from "react";

export default function SearchArea({ show }) {
  return (
    <div>
      <input onChange={show}></input>
    </div>
  );
}
