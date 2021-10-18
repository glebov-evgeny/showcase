import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import { ItemsList } from "../itemList/ItemsList";
import { Basket } from "../basket/Basket";
import { BasketList } from "../basketList/BasketList";
import { Preloader } from "../Preloader";
import { Alert } from "../alert/Alert";


function Main(params) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    setAlertName(item.displayName)
  };

  const removeFromBasket = (mainId) => {
    const newOrder = order.filter((el) => el.mainId !== mainId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const incQuantity = (mainId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === mainId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (mainId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === mainId) {
        const newQuantity = el.quantity - 1;

          return {
            ...el,
            quantity: newQuantity >= 1 ? newQuantity : 1,
          };

      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  }

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setItems(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main">
      <div className="main__container container">
        <Basket quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? (
          <Preloader />
        ) : (
          <ItemsList items={items} addToBasket={addToBasket} />
        )}

        {isBasketShow &&
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        }

      {
        alertName && <Alert name={alertName} closeAlert={closeAlert}/>
      }


      </div>
    </main>
  );
}
export { Main };
