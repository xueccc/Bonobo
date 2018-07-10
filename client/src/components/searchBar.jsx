import React from 'react';

function SearchBar(props) {
  return (
    props.viewHome
    ? (
      <div className="searchArea">
        <h3>Hello {props.userName}! </h3>
        <form>
          <label>
            What are you looking for?  
          </label>
          <div>
            <input className="searchBar" type="text" onChange={props.handleSearch} />
            <br/><button type="submit" className="searchBtn" onClick={props.searchStuff}>Search</button>
          </div>
        </form>
      </div>
    )
    : null
  )
}

export default SearchBar;