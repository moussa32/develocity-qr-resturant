import { ReactComponent as BurgerIcon } from "../../assets/images/BurgerIcon.svg";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-screen flex flex-col pt-[175px] items-center font-normal capitalize md:container">
      <div className="flex flex-row items-center">
        <BurgerIcon width="32" height="32" className="mr-3" />
        <h1 className="text-3xl text-white">
          fast <span className="text-primary">food</span>
        </h1>
      </div>
      <img src={Logo} alt="logo" title="logo" className="mt-8 mb-12" width="282" height="242" />
      <Link className="text-white text-2xl font-medium bg-primary rounded-lg py-1.5 px-[72px]" to="/home">
        Menu
      </Link>
    </div>
  );
};

export default Start;
