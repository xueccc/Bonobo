import React from 'react';

function Friends(props) {
  return (
    props.viewFriends
    ? (
      <div className="friends">
        <h3>Friends</h3>
        <ul>
          {
            props.friends.map(friend => {
              return (
                <div key={friend.id}>
                  <li className="friendList"><span role="img" aria-label="monkey face">🐵</span> {friend.name}</li>
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

export default Friends;