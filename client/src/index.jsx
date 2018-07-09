import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import userData from './dummie_data.js'
import NagivationBar from './components/nagivationBar.jsx';
import MyStuff from './components/myStuff.jsx';
import BarrowedStuff from './components/barrowedStuff.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      views: {
        currentView: 'viewHome',
        viewRequests: false,
        viewMyStuff: false,
        viewBarrowedStuff: false,
        viewFriends: false,
        viewGroups: false,
        viewHome: true
      },
      userData: userData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    var newView = e.target.className;
    var previousView = this.state.currentView;
    this.setState({
      views : {
        [this.state.currentView]: false,
        [e.target.className]: true,
        currentView: newView
      }
    })
  }
  render() {
    return (
      <div>
        <NagivationBar handleClick={this.handleClick} views={this.state.views}/>
        <h3>Hello Xue! </h3>
        <SearchBar />
        <MyStuff viewMyStuff={this.state.views.viewMyStuff} myStuff={this.state.userData.myStuff} />
        <BarrowedStuff viewBarrowedStuff={this.state.views.viewBarrowedStuff} barrowedStuff={this.state.userData.barrowedStuff} />
      </div>
    )}
}



ReactDOM.render(<App />, document.getElementById('app'));
