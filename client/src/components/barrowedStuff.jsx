import React from 'react';

function BarrowedStuff(props) {
  return (
    props.viewBarrowedStuff
    ? (
      <div>
        <h3>Barrowed Stuff</h3>
        <ul>
          { 
            props.barrowedStuff.map((item) => {
             return (
             <div className="item" key={item.id}>
                <li>barrow date: {item.status.barrowed.start_date} to {item.status.barrowed.return_date}</li>    
                <li>{item.name}</li>
                <li>{item.description}</li>  
                <li>owner: {item.owner_name}</li>
              </div>
             )
            })
          }
        </ul>
      </div>
    )
    : null
  )
}

export default BarrowedStuff;