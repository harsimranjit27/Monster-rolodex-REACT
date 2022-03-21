import './App.css';
import {Component} from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters : []
    }
  }

  // when you want something after the app has been mounted on the page
  // THIS HAPPENS ONLY ONCE IN THE APP
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        ()=>{return {monsters: users}},
        ()=>{console.log(this.state )}
      ))
  }

  render(){
    return (
      <div className="App">
        { this.state.monsters.map((monster)=>{
            return (
              <h1 key={monster.id}>{monster.name}</h1>
            );
          })
        }
      </div>
    );
  }
}

export default App;
