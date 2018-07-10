import React from 'react';


function Groups(props) {
  return (
    props.viewGroups
    ? (
      <div className="groups">
        <h3>Groups</h3>
        <ul>
          {
            props.groups.map(group => {
              return (
                <div key={group.groupId}>
                  <li className="groupList">
                    <span role="img" aria-label="monkey">🐒  </span> 
                    {group.name}
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

export default Groups;
