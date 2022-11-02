import { useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../assets/images/CartIcon.svg";

const MiniCart = () => {
  const totalItems = useSelector(({ cart }) => cart.totalItems);
  return (
    <div className="flex flex-row items-center ml-auto relative">
      <span className="text-white bg-primary py-0.5 px-1.5 top-[-9px] left-[-6px] rounded-full absolute text-xs">
        {totalItems}
      </span>
      <CartIcon width={24} height={24} />
    </div>
  );
};

export default MiniCart;
