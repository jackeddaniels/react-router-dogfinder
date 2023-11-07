import { Link } from "react-router-dom";

function Nav({ dogNames }) {
  return (
    <div>
      {dogNames.map(name => <Link to={`/dogs/${name}`} key={name}></Link>)}
    </div>
  );

}

export default Nav;
