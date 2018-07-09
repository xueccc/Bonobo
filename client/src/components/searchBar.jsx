import React from 'react';

function SearchBar(props) {
  return (
    <div className="searchArea">
      <form>
        <label>
          What are you looking for?  
        </label>
        <div>
          <input className="searchBar" type="text"/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;