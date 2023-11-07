import { Link } from "react-router-dom";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import whiskey from "./whiskey.jpg";

function DogList({dogs}) {
  const dogImages = {
    duke,
    perry,
    whiskey
  }

  for (const dog of dogs) {
    for (const key in dogImages) {
      if (dog.src === key) {
        dog.src = dogImages[key];
      }
    }
  }

  return (
    <div>
      <h1>Hello. We have dogs. Click on them for more info.</h1>
      {dogs.map(dog => { return (
        <div key={dog.name}>
          <Link to={dog.name}><p>{dog.name}</p></Link>
          <img src={dog.src}/>
        </div>
      )
      })}
    </div>
  )
}

export default DogList;