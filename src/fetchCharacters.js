/**
 * Fetch anime characters from AniList API
 *
 * @param {number[]} ids - Character ids
 * @returns {Object[]} - Characters, where each character has an id, name and imageUrl
 */
export default async function fetchCharacters(ids) {
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
      name: character.name.native || character.name.full,
      imageUrl: character.image.large,
    }));
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}
