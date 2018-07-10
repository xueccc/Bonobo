import React from 'react';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [['viewRequests', 'Requests'], ['viewMyStuff', 'My stuff'], ['viewBarrowedStuff', 'Barrowed stuff'], ['viewFriends', 'Friends'], ['viewGroups', 'Groups'], ['viewHome', 'Home']]
    }
  }

  
  render() {
    return (
      this.props.views.viewLogin
      ? null
      : (
        <div className="navigationArea"> 
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
       
      )
    }
  
}

export default NavigationBar;
