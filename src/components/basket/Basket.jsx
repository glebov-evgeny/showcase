import basketIcon from './img/basket.png';

function Basket(props) {
  const { quantity = 0 } = props;
  return (
    <div className="basket">
        <div className="basket__content">
          <div className="basket__icon">
              <img src={basketIcon} alt="icon basket" />
              {quantity ? <div className="basket__quantity">{quantity}</div> : null}
          </div>          
        </div>
    </div>
  );
}

export { Basket };
