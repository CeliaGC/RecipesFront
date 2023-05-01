import React, { useState } from 'react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchClick() {
    props.onSearch(searchText);
  }

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
