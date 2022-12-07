import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalInstance } from "../../api/constant";
import Beef from "../../assets/images/Beef.svg";
import Navbar from "../../shared/components/Navbar";
import QuantityButton from "../../shared/components/QuantityButton";

const FoodDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { foodId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    globalInstance
      .get(`product/${foodId}/details`, { signal })
      .then((response) => {
        const { data } = response.data;
        setDetails(data);
        setIsLoaded(true);
        console.log(data);
      })
      .catch((error) => console.log(error.message));

    return () => controller.abort();
  }, []);

  return (
    <>
      <Navbar />
      <article className="text-white flex flex-col items-center justify-center px-4 md:container sm:mx-auto">
        <header className="mt-5">
          {isLoaded && <img width={215} height={166} src={details.image} title={details.name} alt={details.name} />}
        </header>
        <section className="bg-dark w-100 mt-14 w-full px-3 rounded-4xl relative pb-5">
          <QuantityButton containerClassName="top-[-25px] absolute left-1/2 transform -translate-x-1/2" />
          <div className="flex flex-row mt-14">
            {isLoaded && <h1 className="text-semiwhite text-2xl font-black">{details.name}</h1>}
            {isLoaded && <span className="ml-auto text-primary font-bold text-lg self-center">{details.price} $</span>}
          </div>
          {isLoaded && <p className="text-md font-normal text-secondary my-4">{details.brief_desc}</p>}
          <div className="my-4">
            <h2 className="text-primary text-sm capitalize font-semibold pb-4">Ingredients</h2>
            <div className="flex flex-row gap-4 flex-wrap">
              {isLoaded &&
                details.ingredients.map(({ id, icon, name }) => (
                  <div key={`${name}${id}`} className="bg-semidark p-4 rounded-3xl min-w-[68px] flex flex-col">
                    <img width={22} height={22} className="block mx-auto mb-3" src={icon} title={name} alt={name} />
                    <h3 className="text-white text-xs font-bold text-center mt-auto">{name}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-primary text-sm capitalize font-semibold">Description</h2>
          </div>
          {isLoaded &&
            details.choices.map(({ title, type, items }) => (
              <div className="my-4" key={`${title}`}>
                <h2 className="text-primary text-sm capitalize font-semibold">{title}</h2>
              </div>
            ))}
        </section>
      </article>
    </>
  );
};

export default FoodDetails;
