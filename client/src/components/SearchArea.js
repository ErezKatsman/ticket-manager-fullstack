import React from "react";

export default function SearchArea({ show }) {
  return (
    <div>
      <input id="searchInput" onChange={show}></input>
    </div>
  );
}
