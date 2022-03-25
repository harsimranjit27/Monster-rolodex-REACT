import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (event) => {
    const searchedString = event.target.value.toLowerCase()
    setSearchField(searchedString)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        type="search"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}
export default App
