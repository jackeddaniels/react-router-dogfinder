async function getDogs() {
  const data = await fetch("http://localhost:5001/dogs");
  const dogs = await data.json();

  return dogs;
}

export { getDogs };