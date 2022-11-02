import banner from "../../assets/images/banner.png";
import { ReactComponent as ArrowIcon } from "../../assets/images/ArrowIcon.svg";

const FeaturedCard = () => {
  return (
    <div className="bg-primary text-white rounded-[30px] flex overflow-hidden">
      <div className="p-5">
        <h2 className="text-base font-black">Wait, double ham burger?</h2>
        <p className="text-sm my-3">We are here with the best double ham burger!</p>
        <button className="font-black flex flex-row items-center">
          <ArrowIcon className="mr-2" /> Order now
        </button>
      </div>
      <img src={banner} alt="banner" title="banner" className="w-[138px] h-[142px]" />
    </div>
  );
};

export default FeaturedCard;
