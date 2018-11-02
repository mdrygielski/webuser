import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Żono,<br/>
            Co będzie dzisiaj na kolecje?
          </p>
        </header>
        <body>
          <img alt={"test"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9R_2M4rlLj5YV1OXy52fGNMhr61NllHs4_jo8eM2lp1C7Hg5tg"}/>
          {/*<button>Rozpocznij badanie</button>*/}
        </body>
      </div>
    );
  }
}

export default App;
