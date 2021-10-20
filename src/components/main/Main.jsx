import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../../config";

import { ShopContext } from "../../context";

import { ItemsList } from "../itemList/ItemsList";
import { Basket } from "../basket/Basket";
import { BasketList } from "../basketList/BasketList";
import { Preloader } from "../Preloader";
import { Alert } from "../alert/Alert";

function Main() {
  const { loading, order, isBasketShow, alertName, setItems } =
    useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.shop);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <main className="main">
      <div className="main__container container">
        <Basket quantity={order.length} />
        {loading ? <Preloader /> : <ItemsList />}

        {isBasketShow && <BasketList />}

        {alertName && <Alert />}
      </div>
    </main>
  );
}
export { Main };
