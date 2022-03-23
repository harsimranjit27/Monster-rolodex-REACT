import './App.css';
import {Component} from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters : [],
      searchedString : ''
    }
  }

  // use this when you want something after the app has been mounted on the page
  // THIS HAPPENS ONLY ONCE IN THE APP
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        ()=>{return {monsters: users}},
        ()=>{console.log(this.state)}
      ))
  }

  render(){
    
    const filteredMonsters = this.state.monsters.filter(
      (monster)=>{
        return monster.name.toLowerCase().includes(this.state.searchedString);
      }
    );

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search..." 
          onChange={ (event)=>{
              const searchedString = event.target.value.toLowerCase();
              this.setState(()=>{ return {searchedString} })
            }
          }
        />

        /* writing javascript to iterate over array of monsters */
        {
          filteredMonsters.map((filteredMonster)=>{
            return (
              <h1 key={filteredMonster.id}> {filteredMonster.name} </h1>
            );
          })
        }
      </div>
    );
  }
}

export default App;
