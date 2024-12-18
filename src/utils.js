/**
 * Fetch anime characters from AniList API
 *
 * @param {number[]} ids - Character ids
 * @returns {Object[]} - Characters, where each character has an id, name and imageUrl
 */
export async function fetchCharacters(ids) {
  const query = `
    query($ids: [Int!]) {
      Page {
        characters(id_in: $ids) {
          id
          name {
            native
            full
          }
          image {
            large
          }
          description
        }
      }
    }
  `;

  const variables = { ids };

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.Page.characters.map((character) => ({
      id: character.id,
      name: character.name.full.split(' ')[0],
      imageUrl: character.image.large,
    }));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}

/**
 * Shuffle an array;
 *
 * @param {Object[]} array - An array of objects
 */
export function shuffle(array) {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}

/**
 * Reset characters by setting each character's clicked property to false.
 *
 * @param {Object[]} characters - Character objects
 * @returns A new array of characters with each character's clicked property set to false
 */
export function resetCards(characters) {
  return characters.map((character) => {
    character.clicked = false;
    return character;
  });
}
