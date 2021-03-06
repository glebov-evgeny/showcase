import { useContext } from "react";
import { ShopContext } from "../../context";
import { BasketItem } from "../basketItem/BasketItem";
import closePic from "./img/close.png";

function BasketList() {

  const {order = [], handleBasketShow} = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.itemPrice * el.quantity;
  }, 0);

  return (
    <div className="basket__list">
      <h2 className="basket__list-title">Корзина:</h2>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
          />
        ))
      ) : (
        <div className="basket__item-clear">Товары не добавлены</div>
      )}
      {order.length ? (
        <div className="basket__list-info">
          <h3 className="basket__list-total">Общая стоимость:</h3>
          <p className="basket__list-currentPrice">{totalPrice}</p>
          <div className="basket__list-btn">Перейти к оплате</div>
        </div>
        
      ) : null}
      <img
        className="basket__list-close"
        src={closePic}
        alt="close"
        onClick={handleBasketShow}
      />
    </div>
  );
}

export { BasketList };
