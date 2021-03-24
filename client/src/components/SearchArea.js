import React from "react";

export default function SearchArea({ search }) {
  return (
    <div>
      <input id="searchInput" onChange={search}></input>
    </div>
  );
}
