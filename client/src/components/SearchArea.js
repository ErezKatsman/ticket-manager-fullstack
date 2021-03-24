import React from "react";

export default function SearchArea({ search }) {
  return (
    <div className="search-area">
      <input id="searchInput" onChange={search} placeholder="search"></input>
    </div>
  );
}
