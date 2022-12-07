import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../assets/images/BurgerIcon.svg";
import { ReactComponent as BackArrowIcon } from "../../assets/images/BackArrowIcon.svg";
import MiniCart from "./MiniCart";

const Navbar = () => {
  const location = useLocation();

  const handleShowLogo = () => {
    if (location.pathname.includes("home")) {
      return (
        <>
          <BurgerIcon width={32} height={32} />
          <span className="text-2xl text-white font-semibold ml-4">Menu</span>
        </>
      );
    } else {
      return (
        <Link to="/home">
          <BackArrowIcon width={20} height={20} />
        </Link>
      );
    }
  };

  return (
    <header className="flex flex-row items-center px-4 pt-8 px-4 md:container md:mx-auto">
      {handleShowLogo()}
      <MiniCart />
    </header>
  );
};

export default Navbar;
