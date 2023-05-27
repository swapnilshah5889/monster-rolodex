import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    monsters:[],
    searchField:''
  });


  useEffect(() => {
    console.log('Component mounted');
    
    // Asynchoronous call to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        // Merge state objects
        setState(prevState => ({ ...prevState, monsters: jsonData }));
      } catch (error) {
        console.log("Error fetching the api")
      }
    }
    
    fetchData();
  }, 
  // The useEffect array is empty so it will be called only once
  []) 
  
  useEffect(() => {
    if(state.monsters) {
      console.log('Response : ', state.monsters);
    }
  }, 
  // The useEffect array has state.monsters so this 
  // useEffect will be triggered everytime state.monsters is updated
  [state.monsters]) 
  

  // Filtered monsters will be set everytime monsters or searchfield changes in the state
  useEffect(() => {
    // Filter monsters from state.monsters and then set it to a variable filteredMonsters
    const filteredMonsters = state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(state.searchField);
    });
    // Set filteredMonsters using state
    setFilteredMonsters(filteredMonsters);
  },
  // The useEffect array has state.monsters & state.searchField so this 
  // useEffect will be triggered everytime state.monsters or state.searchField is updated
  [state.monsters, state.searchField]);
  
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  // Handle On search change event : fetch value from input field and set it in the state
  const onSearchChanged = (event) =>{
    console.log(event);
    const searchString = event.target.value.toLocaleLowerCase();
    // using prevState we preserve the old state object and merge the changes in the 2nd parameter
    setState(prevState => ({ ...prevState, searchField: searchString} ));
  };

  return (
    <div className="App">
      {console.log('Render')}

      {/* Input field */}
      <input className='search-box' type='search' placeholder='Search Monster' onChange={onSearchChanged}/>

      {/* List of Monsters */}
      {filteredMonsters.map((monster) => (
        <div key={monster.id}>
          <p>{monster.name}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
