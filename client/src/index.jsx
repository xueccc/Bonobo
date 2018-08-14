import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import userData from './dummie_data.js';
import Login from './components/login.jsx';
import NavigationBar from './components/nagivationBar.jsx';
import Friends from './components/friends.jsx';
import Groups from './components/groups.jsx';
import MyStuff from './components/myStuff.jsx';
import BarrowedStuff from './components/barrowedStuff.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      views: {
        currentView: 'viewLogin',
        viewRequests: false,
        viewMyStuff: false,
        viewBarrowedStuff: false,
        viewFriends: false,
        viewGroups: false,
        viewHome: false,
        viewLogin: true,
      },
      userData: userData,
      searchConditions: null,
      searchResults: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.searchStuff = this.searchStuff.bind(this)
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

  handleLogin(e) {
    e.preventDefault()
    this.setState({
      views: {
        currentView: 'viewHome',
        viewRequests: false,
        viewMyStuff: false,
        viewBarrowedStuff: false,
        viewFriends: false,
        viewGroups: false,
        viewHome: true,
        viewLogin: false
      }
    })
  }
  
  addUser(userInfo) {
    axios.post('/', userInfo)
      .then(response =>{
        console.log('post request successful');
      })
      .catch(err => {
        console.log('error: ', err);
      })
  }

  getUserInfo(userName, password) {
    axios.get('/getUserInfo', {
        params: {
          user_name: userName,
          user_password: password
        }
      })
      .then(response => {
        this.setState({userData: response.data[0]})
      })
      .catch(error => {
        console.log(error);
      })
  }

  searchStuff(e, callback) {
    e.preventDefault();
    axios.get('/searchStuff', {
        params: {
          keyword: this.state.searchConditions
        }
      })
      .then(response => {
        this.setState({searchResults: response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSearch(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({searchConditions: e.target.value})
      
    // searchStuff(this.state.searchStuff, (error, result) => {
    //   console.log(result)
    // })
    
  }

  componentDidMount() {
    // this.addUser(userData)
    this.getUserInfo('Xue', 'xue')
  }
  
  render() {
    return (
      <div>
        <Login  handleLogin={this. handleLogin} viewLogin={this.state.views.viewLogin} />
        <NavigationBar handleClick={this.handleClick} views={this.state.views}/>
        <SearchBar viewHome={this.state.views.viewHome} userName={this.state.userData.user_name} handleSearch={this.handleSearch} searchStuff={this.searchStuff} searchResults={this.state.searchResults} searchConditions={this.state.searchConditions}/>
        <Friends viewFriends={this.state.views.viewFriends} friends={this.state.userData.friends} />
        <Groups viewGroups={this.state.views.viewGroups} groups={this.state.userData.groups} />
        <MyStuff viewMyStuff={this.state.views.viewMyStuff} myStuff={this.state.userData.myStuff} />
        <BarrowedStuff viewBarrowedStuff={this.state.views.viewBarrowedStuff} barrowedStuff={this.state.userData.barrowedStuff} />
      </div>
    )}
}



ReactDOM.render(<App />, document.getElementById('app'));
