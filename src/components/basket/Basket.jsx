import { useContext } from "react";
import { ShopContext } from "../../context";
import basketIcon from './img/basket.png';

function Basket() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const quantity = order.length;
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
