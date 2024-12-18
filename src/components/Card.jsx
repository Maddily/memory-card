import '../styles/Card.css';

/**
 * A component to render a character card.
 *
 * @param {number} id - Character id
 * @param {string} name - Character name
 * @param {string} imageUrl - Image url
 * @param {function(event)} onClick - A function that handles a click on a card
 * @returns {JSX.Element}
 */
export default function Card({ id, name, imageUrl, onClick }) {
  return (
    <div onKeyDown={onClick} onClick={onClick} className="card" data-id={id} tabIndex="0">
      <img src={imageUrl} alt={'Image of' + name} />
      <p className="character-name">{name}</p>
    </div>
  );
}
