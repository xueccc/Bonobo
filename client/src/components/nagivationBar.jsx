import React from 'react';

class NagivationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [['viewRequests', 'Requests'], ['viewMyStuff', 'My stuff'], ['viewBarrowedStuff', 'Barrowed stuff'], ['viewFriends', 'Friends'], ['viewGroups', 'Groups'], ['viewHome', 'Home']]
    }
  }

  
  render() {
    return (
      <div> 
        {
          this.state.buttons.map((btn, key) => {
            return (
              this.props.views[btn[0]]
              ? null
              : <button type="submit" className={btn[0]} onClick={this.props.handleClick} key={btn[0]}>{btn[1]}</button>
            )
          })
        }
      </div>
        )
      }
  
}

export default NagivationBar;
