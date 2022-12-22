import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../assets/images/BurgerIcon.svg";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nextStep = setTimeout(() => {
      navigate("/scan");
    }, 1400);

    return () => clearTimeout(nextStep);
  }, []);

  return (
    <div className="h-screen flex flex-col pt-[295px] items-center font-normal capitalize md:container">
      <BurgerIcon width="115" height="115" />
      <h1 className="text-3xl text-white mt-3">
        fast <span className="text-primary">food</span>
      </h1>
    </div>
  );
};

export default Splash;
