import closePic from './img/close.png';

function BasketItem(props) {
  const {
    mainId,
    displayName,
    itemPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <div className="basket__item" id={mainId}>
        <p className="basket__item-title">{displayName}</p>
        <div className="basket__item-action" onClick={()=>decQuantity(mainId)}>-</div>
        <p className="basket__item-quantity">x {quantity}</p>
        <div className="basket__item-action" onClick={()=>incQuantity(mainId)}>+</div>
        <span>=</span>
        <p className="basket__item-price">{itemPrice * quantity}</p>
        <div className="basket__item-delete" onClick={()=>removeFromBasket(mainId)}> 
          <img src={closePic} alt="close" />
        </div>
    </div>
  );
}

export { BasketItem };
