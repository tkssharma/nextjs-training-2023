const POKEMON_COUNT = 37;

export function getRandomIds() {
  // Generate a random number between min and max
  const firstId = Math.floor(Math.random() * POKEMON_COUNT) + 1;

  // Generate a random number between min and max that is different from randomNumber1
  let secondId = Math.floor(Math.random() * POKEMON_COUNT) + 1;
  while (secondId === firstId) {
    secondId = Math.floor(Math.random() * POKEMON_COUNT) + 1;
  }

  return { firstId, secondId };
}
