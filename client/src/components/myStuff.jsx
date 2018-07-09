import React from 'react';

function MyStuff(props) {
  return (
      props.viewMyStuff 
      ? (
      <div>
        <h3>My Stuff</h3>
        <ul>
        {
          props.myStuff.map(item => {
            return (
            <div className="item" key={item.id}>
                <li className={item.id}>{item.name}</li>
                <li>{item.description}</li>
                <li>status: {
                  item.status.available
                  ? <span>available</span>
                  : (
                    <ul className="barrowedDetails">
                      <li>barrowed by: {item.status.barrowed.user_name}</li>
                      <li>barrowed time: {item.status.barrowed.start_date} to {item.status.barrowed.return_date}</li>
                      <li>purpose: {item.status.barrowed.purpose}</li>
                    </ul>
                  ) 
                }
                </li>
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

export default MyStuff;
