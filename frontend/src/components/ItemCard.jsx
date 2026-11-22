import './ItemCard.css'
function ItemCard({name, image, price, info, type }) {
  
  return (
    <div className="item-card">
      <div className="item-header">
        <h3 className="item-name">
          <a href={info} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <img src = {image}></img>
      </div>
      <p className="price">{price}</p>
      <div className="item-meta">
        <span>{type}</span>
      </div>
    </div>
  );
};

export default ItemCard;