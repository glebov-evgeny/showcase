import basketIcon from './img/basket.png';

function Basket(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="basket">
        <div className="basket__content" onClick={handleBasketShow}>
          <div className="basket__icon">
              <img src={basketIcon} alt="icon basket" />
              {quantity ? <div className="basket__quantity">{quantity}</div> : null}
          </div>          
        </div>
    </div>
  );
}

export { Basket };
