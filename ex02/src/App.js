import React, { Component } from "react";
//import "./App.css";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    let myCookieData = document.cookie;
    let myLocalStorageData = localStorage.getItem("Paragon");
    let mySessionStorageData = sessionStorage.getItem("frontend");

    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set my storage</button>
        <button onClick={this.getMyStorage}>Get my storage</button>
      </div>
    );
  }
}

export default App;
