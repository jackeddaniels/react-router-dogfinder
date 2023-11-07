import { useState } from 'react';
import './App.css';
import Nav from "./Nav";
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [allDogs, setAllDogs] = useState(null);
  console.log("app rendering allDogs=", allDogs);
  async function getDogs() {
    const data = await fetch("http://localhost:5001/dogs");
    const dogs = await data.json();
    setAllDogs(dogs);
  }


  if (allDogs === null) {
    getDogs();
    return (
      <h1>Loading dog.....</h1>
    );
  }

  console.log("all dogs", allDogs);

  const dogNames = allDogs.map(dog => {
    return dog.name;
  });

  console.log("dog names:", dogNames);


  return (
    <div className="App">
      <BrowserRouter>
      {allDogs !== null &&
        (<Nav dogNames={dogNames} />)}
        <RoutesList dogs={allDogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
