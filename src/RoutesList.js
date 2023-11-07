import { Navigate, Route, Routes } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

function RoutesList({dogs}) {

  return (
    <Routes>
        <Route element= { <DogList dogs={dogs}/>} path="/dogs" />
        <Route element= { <DogDetails dogs={dogs}/>} path="/dogs/:name" />
        <Route element= { <Navigate to="/dogs"/> } path="*" />
    </Routes>
  );
}

export default RoutesList;
