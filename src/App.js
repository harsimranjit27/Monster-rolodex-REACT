import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

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
        ()=>{return {monsters: users}}
      ))
  }

  // optimizing the anonymous function inside render() as it was getting created and destroyed everytime when component was rendered
  onSearchChange = (event)=>{
    const searchedString = event.target.value.toLowerCase();
    this.setState(()=>{ return {searchedString} })
  }

  render(){

    // using deconstructuring making the code more readable
    const {monsters, searchedString} = this.state;
    const {onSearchChange} = this;    

    const filteredMonsters = monsters.filter(
      (monster)=>{
        return monster.name.toLowerCase().includes(searchedString);
      }
    );

    return (
      <div className="App">
        <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />        
      </div>
    );
  }
}

export default App;
