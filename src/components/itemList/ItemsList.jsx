import {Item} from '../item/Item';

function ItemsList(props) {
  const { items = [] } = props;
  if(!items.length) {
    return <h3>Ничегошеньки</h3>
  }
  return (
      <div className="item__list">
          {items.map(item => (
              <Item key={item.mainId} {...item}/>
          ))}
      </div>
  )
}

export { ItemsList };
