import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import { ItemsList } from "../itemList/ItemsList";
import { Basket } from "../basket/Basket";
import { Preloader } from "../Preloader";

function Main(params) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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
    };
  };

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
        <Basket quantity={order.length} />
        {loading ? <Preloader /> : <ItemsList items={items} addToBasket={addToBasket} />}
      </div>
    </main>
  );
}
export { Main };
