import React from 'react';

function MyStuff(props) {
  return (
      props.viewMyStuff 
      ? (
      <div>
        <h3>My Stuff</h3>
        <button type="submit"> + Add item</button>
        {
          props.myStuff.map(item => {
            return (
              <div className="item" key={item.id}>
              <ul>
                <li className={item.id}>
                  {item.name}
                  <button className="updateBtn" type="submit">Update Status</button>
                </li>
                <li>{item.description}</li>
                <li>status: {
                  item.status.available
                  ? <span>available</span>
                  : (
                    <ul className="barrowedDetails">
                      <li>barrowed by: {item.status.barrowed.user_name}</li>
                      <li>barrowed dates: {item.status.barrowed.start_date} to {item.status.barrowed.return_date}</li>
                      <li>purpose: {item.status.barrowed.purpose}</li>
                    </ul>
                  ) 
                }
                </li>
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

export default MyStuff;
