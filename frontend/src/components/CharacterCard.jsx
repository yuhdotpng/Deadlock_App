import './CharacterCard.css';
function CharacterCard({ name, image, tag1, tag2, tag3}) {

  return (
    <div className="character-card">
      <a href = {`https://deadlock.wiki/${name}`}>
        <img src={image} alt={name} />
      </a>
        <div className="container">
          <h3>{name}</h3>
          <p className='tag'> {tag1}</p>
          <p className='tag'> {tag2}</p>
          <p className='tag'> {tag3}</p>
      </div>
    </div>
  );
}

export default CharacterCard;