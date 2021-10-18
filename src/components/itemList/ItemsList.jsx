import {Item} from '../item/Item';

function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype} = props;

  const showMore = 15;



  if(!items.length) {
    return <h3>Ничегошеньки</h3>
  }
  return (
      <div className="item__list">
          {items.slice(0, showMore).map(item => (
              <Item key={item.mainId} {...item} addToBasket={addToBasket}/>
          ))}
      </div>
      
  )
}

export { ItemsList };
