import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  filterStuff() {
    var render = null;
  
      this.props.searchResults 
      ? (this.props.searchResults.map(stuff => {
          stuff.myStuff.map(item => {
           if (item.name.includes(this.props.searchConditions)) {
             render = (<div className="item"> 
             <ul>
               <li>item: {item.name}</li>
               <li>owner: {item.owner_name}</li>
               <li>{item.status.available}</li>
             </ul>
           </div>)
         
             return 
               <div className="item"> 
                 <ul>
                   <li>{item.name}</li>
                   <li>{item.owner_name}</li>
                   <li>{item.status.available}</li>
                 </ul>
               </div>
             
           } else {
             return null
           }
          })
         
      })
     )
      : null

    return render;
    
  }
  render(){
  return (
    this.props.viewHome
    ? (
      <div className="searchArea">
        <h3>Hello {this.props.userName}! </h3>
        <form>
          <label>
            What are you looking for?  
          </label>
          <div>
            <input className="searchBar" type="text" onChange={this.props.handleSearch} />
            <br/><button type="submit" className="searchBtn" onClick={this.props.searchStuff}>Search</button>
          </div>
        </form>

       {
         this.filterStuff()
       }
      </div>
    )
    : null
  )
}
}

export default SearchBar;