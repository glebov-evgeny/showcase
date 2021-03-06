import { useContext } from "react";
import { ShopContext } from "../../context";

function Item(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    granted,

  } = props;

  const {addToBasket} = useContext(ShopContext)
  const itemPrice = price.finalPrice;

  return (
    <div className="item" id={mainId}>
      <div className="item__img">
        <img src={granted[0].images.background} alt={displayName} />
      </div>
      <div className="item__content">
        <div className="item__info">
          <p className="item__title">{displayName}</p>
          <p className="item__description">{displayDescription}</p>
        </div>
        <div className="item__action">
          <p className="item__price">{itemPrice}</p>
          <button
            className="item__btn"
            onClick={() =>
              addToBasket({
                mainId,
                displayName,
                itemPrice,
              })
            }
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
export { Item };
