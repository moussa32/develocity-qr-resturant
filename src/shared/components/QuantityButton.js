import { useCallback, useState } from "react";

const QuantityButton = ({
  onIncrement,
  onDecremment,
  initQty,
  containerClassName,
  incrementClassName,
  decremmentClassName,
}) => {
  const [qty, setQty] = useState(initQty ? initQty : 1);

  const handleQty = useCallback(
    (type) => {
      if (type !== "increment") {
        if (qty <= 0) return qty;
        if (onDecremment) onDecremment({ qty });
        return setQty((prevState) => prevState - 1);
      } else {
        if (onIncrement) onIncrement({ qty });
        return setQty((prevState) => prevState + 1);
      }
    },
    [qty]
  );

  return (
    <div className={`${containerClassName}`}>
      <button
        className={`bg-primary rounded-l-4xl px-4 py-4 text-md ${decremmentClassName}`}
        onClick={() => handleQty("decremment")}
      >
        -
      </button>
      <span className="bg-dark font-extrabold px-4 py-4">{qty}</span>
      <button
        className={`bg-primary rounded-r-4xl px-4 py-4 text-md ${incrementClassName}`}
        onClick={() => handleQty("increment")}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
