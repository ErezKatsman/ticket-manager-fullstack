import React, { useState } from "react";
import SearchLabels from "./SearchLabels";

export default function SearchArea({ search, labelClick, chosenLabels }) {
  return (
    <div className="search-area">
      <input id="searchInput" onChange={search} placeholder="search"></input>
      <SearchLabels chosenLabels={chosenLabels} labelClick={labelClick} />
    </div>
  );
}
