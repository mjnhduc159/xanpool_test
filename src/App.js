import React, { Component } from 'react';
import GitHubUserRepos from './components/GitHubUserRepos';
import logo from './assets/images/logo.png';
import './assets/scss/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub User Repositories</h2>
        </div>
        <div className="container">
          <GitHubUserRepos top={30} />
        </div>
      </div>
    );
  }
}

export default App;
