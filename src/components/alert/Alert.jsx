import { useEffect } from "react";

function Alert(props) {
  const { name = "", closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000);

    return () => {
        clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className="alert" id="alert">
      <div className="alert__item"><span>'</span>{name}<span>'</span> - добавлен в корзину</div>
    </div>
  );
}

export { Alert };
