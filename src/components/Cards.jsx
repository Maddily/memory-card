import Card from "./Card";
import '../styles/Cards.css';

/**
 * A component to render character cards wrapped in a div.
 *
 * @param {function(event)} onClick - A function that handles a click on a card
 * @param {Object[]} characters - Character objects
 * @returns {JSX.Element}
 */
export default function Cards({ onClick, characters }) {
  return (
    <div className="cards">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            imageUrl={character.imageUrl}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}
