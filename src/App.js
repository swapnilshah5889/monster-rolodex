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
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setState(prevState => ({ ...prevState, monsters: jsonData }));
        filteredMonsters = state.monsters;
      } catch (error) {
        console.log("Error fetching the api")
      }
    }
    
    fetchData();
  }, [])
  
  useEffect(() => {
    if(state.monsters) {
      console.log('Response : ', state.monsters);
    }
  }, [state.monsters])
  
  const filteredMonsters = state.monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(state.searchField);
  });

  return (
    <div className="App">
      {console.log('Render')}

      {/* Input field */}
      <input className='search-box' type='search' placeholder='Search Monster' onChange={(event)=>{
        console.log(event);
        const searchString = event.target.value.toLocaleLowerCase();
        setState(prevState => ({ ...prevState, searchField: searchString} ));
      }}/>

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
