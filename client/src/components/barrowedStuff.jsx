import React from 'react';

function BarrowedStuff(props) {
  return (
    props.viewBarrowedStuff
    ? (
      <div>
        <h3>Barrowed Stuff</h3>
        
          { 
            props.barrowedStuff.map((item) => {
             return (
             <div className="item" key={item.id}>
             <ul>
                <li>
                  barrowed dates: {item.status.barrowed.start_date} to {item.status.barrowed.return_date}
                  <button className="removeBtn" type="submit">Return item</button>
                </li>    
                <li>{item.name}</li>
                <li>{item.description}</li>  
                <li>owner: {item.owner_name}</li>
              </ul>
              </div>
             )
            })
          }
  
      </div>
    )
    : null
  )
}

export default BarrowedStuff;