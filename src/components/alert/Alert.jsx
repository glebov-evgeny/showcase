import { useEffect, useContext } from "react";
import { ShopContext } from "../../context";

function Alert() {
  
  const { alertName = "", closeAlert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000);

    return () => {
        clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [alertName]);

  return (
    <div className="alert" id="alert">
      <div className="alert__item"><span>'</span>{alertName}<span>'</span> - добавлен в корзину</div>
    </div>
  );
}

export { Alert };
