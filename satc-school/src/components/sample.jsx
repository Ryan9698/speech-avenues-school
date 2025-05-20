export default async function Test() {
  let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  let response = await data.json();
  console.log(response);

  const names = response.results.map((p) => p.name);
  console.log(names);
}

Test();
