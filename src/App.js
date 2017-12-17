import React, { Component } from 'react';
import './css/app.css';
import WakeUp from "./modules/wakeup/WakeUp";
import essay from "./essays/Fear is the most elegant weapon";

class App extends Component {
  render() {
    return (
        <div class="appContainer">
          <WakeUp textComponents={essay.text} callBack={ ()=>{} } />
        </div>
    );
  }
}

export default App;
