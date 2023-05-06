export const Pokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await response.json();

  return (
    <div>
      <span>.pokemons</span>
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    </div>
  );
};
