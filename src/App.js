import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {

  // Initial Values of State object
  const [state, setState] = useState({
    monsters:[],
    searchField:''
  });


  // useEffect hook to fetch api data
  useEffect(() => {
    
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
  
  // Hook to log monster's data
  useEffect(() => {
    if(state.monsters) {
      // console.log('Response : ', state.monsters);
    }
  }, 
  // The useEffect array has state.monsters so this 
  // useEffect will be triggered everytime state.monsters is updated
  [state.monsters]) 
  

  // Filtered monsters will be set everytime monsters or searchfield changes in the state
  useEffect(() => {
    // Filter monsters from state.monsters and then set it to a variable filteredMonsters
    let filteredMonsters;
    if(state.searchField.length>0) {
      filteredMonsters = state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(state.searchField);
      });
    }
    else {
      filteredMonsters = state.monsters;
    }
    // Set filteredMonsters using state
    setFilteredMonsters(filteredMonsters);
  },
  // The useEffect array has state.monsters & state.searchField so this 
  // useEffect will be triggered everytime state.monsters or state.searchField is updated
  [state.monsters, state.searchField]);
  
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  // Handle On search change event : fetch value from input field and set it in the state
  const onSearchChanged = (event) =>{
    const searchString = event.target.value.toLocaleLowerCase();
    // using prevState we preserve the old state object and merge the changes in the 2nd parameter
    setState(prevState => ({ ...prevState, searchField: searchString} ));
  };

  // The component that will be rendered
  return (  
    <div className="App">

      {/* App Title */}
      <h1 className='app-title'>Monster Diary</h1>
      {/* Input field */}
      <SearchBox 
        className={'monsters-search-box'}
        onChangeHandler={onSearchChanged}
        placeHolder={'Search Monster'}    
      />
      
      {/* List of Monsters */}
      <CardList 
        monsters={filteredMonsters}/>

    </div>
  );
}

export default App;
