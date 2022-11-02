import { ReactComponent as BurgerIcon } from "../../assets/images/BurgerIcon.svg";
import { ReactComponent as CartIcon } from "../../assets/images/CartIcon.svg";

const Navbar = () => {
  return (
    <header className="flex flex-row items-center px-4 pt-8 px-4">
      <BurgerIcon width={32} height={32} />
      <span className="text-2xl text-white font-semibold ml-4">Menu</span>
      <div className="flex flex-row items-center ml-auto relative">
        <span className="text-white bg-primary py-0.5 px-1.5 top-[-9px] left-[-6px] rounded-full absolute text-xs">
          3
        </span>
        <CartIcon width={24} height={24} />
      </div>
    </header>
  );
};

export default Navbar;
