import { useContext } from "react";
import { ShopContext } from "../../context";
import { Item } from "../item/Item";

function ItemsList() {
  const { items = [] } = useContext(ShopContext);

  if (!items.length) {
    return <h3>Ничегошеньки</h3>;
  }

  return (
    <div className="item__list">
      {items.slice(0, 10).map((item) => (
        <Item key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { ItemsList };
