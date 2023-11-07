import { useParams } from "react-router-dom";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import whiskey from "./whiskey.jpg";

function DogDetails({dogs}) {
  const { name } = useParams();

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

  const dog = dogs.filter(d => d.name === name);

  return (
    <div>
      <h1>DogDetails</h1>
      <img src={dog[0].src}/>
      <p>{dog[0].name}</p>
      {(dog[0].facts).map((fact, idx) => {return (<li key={idx}>{fact}</li>)})}
    </div>

  )
}

export default DogDetails;