import { ReactComponent as BurgerIcon } from "../../assets/images/BurgerIcon.svg";

const Splash = () => {
  return (
    <div className="h-screen flex flex-col pt-[295px] items-center font-normal capitalize md:container">
      <BurgerIcon />
      <h1 className="text-3xl text-white mt-3">
        fast <span className="text-primary">food</span>
      </h1>
    </div>
  );
};

export default Splash;
