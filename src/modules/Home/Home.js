import mockData2 from "../../assets/images/mock-data-2.png";
import mockData1 from "../../assets/images/mock-data-1.png";
import pizza1 from "../../assets/images/pizza-mock-data-1.png";
import pizza2 from "../../assets/images/pizza-mock-data-2.png";
import pizza3 from "../../assets/images/pizza-mock-data-3.png";
import pizza4 from "../../assets/images/pizza-mock-data-4.png";
import Navbar from "../../shared/components/Navbar";
import FoodCard from "./FoodCard";
import FeaturedCard from "./FeaturedCard";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Featured */}
      <section className="flex flex-row gap-3 px-4 mt-4 overflow-x-scroll pb-4">
        <FeaturedCard />
      </section>
      <section className="flex flex-row gap-3 px-4 mt-4 overflow-x-scroll pb-4">
        <div className="rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 bg-primary">
          <span className="capitalize text-white">Burgers</span>
        </div>
        <div className="bg-semiwhite rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 active:bg-primary">
          <span className="capitalize text-black group-active:text-white">Meals</span>
        </div>
        <div className="bg-semiwhite rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 active:bg-primary">
          <span className="capitalize text-black group-active:text-white">Pizza</span>
        </div>
        <div className="bg-semiwhite rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 active:bg-primary">
          <span className="capitalize text-black group-active:text-white">Sushi</span>
        </div>
        <div className="bg-semiwhite rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 active:bg-primary">
          <span className="capitalize text-black group-active:text-white">Drinks</span>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 pb-6">
        <FoodCard image={mockData2} title="Grilled beef burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={mockData1} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={mockData2} title="Grilled beef burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={mockData1} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={mockData2} title="Grilled beef burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={mockData1} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={pizza1} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={pizza2} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={pizza3} title="chicken burger" summary="onion with cheese" price="24.5" />
        <FoodCard image={pizza4} title="chicken burger" summary="onion with cheese" price="24.5" />
      </section>
    </>
  );
};

export default Home;
