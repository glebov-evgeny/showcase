import closePic from './img/close.png';

function BasketItem(props) {
  const {
    mainId,
    displayName,
    itemPrice,
    quantity
  } = props;

  return (
    <div className="basket__item" id={mainId}>
        <p className="basket__item-title">{displayName}</p>
        <span>х</span>
        <p className="basket__item-quantity">{quantity}</p>
        <span>=</span>
        <p className="basket__item-price">{itemPrice}</p>
        <div className="basket__item-delete"> 
          <img src={closePic} alt="close" />
        </div>
    </div>
  );
}

export { BasketItem };
