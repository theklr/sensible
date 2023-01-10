import React, { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler } from "react";
type SearchProps = {
  handleSearch: MouseEventHandler;
  keywordSearch?: string;
  handleKeyword: ChangeEventHandler;
};

function Search({ handleSearch, keywordSearch, handleKeyword }: SearchProps) {
  return (
    <section className="search">
      <h3>Search</h3>
      <input
        type="text"
        name="search"
        aria-label="search nearby"
        value={keywordSearch}
        onChange={handleKeyword}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
}

export default Search;
