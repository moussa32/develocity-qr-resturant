import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { globalInstance } from "../../api/constant";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setItem } from "../../redux/features/cartSlice";
import Navbar from "../../shared/components/Navbar";
import CheckboxInput from "../../shared/components/CheckboxInput";

const FoodDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { foodId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    globalInstance
      .get(`product/${foodId}/details`, { signal })
      .then(response => {
        const { data } = response.data;
        setDetails({ ...data, qty: 1, price: Number(data.price) });
        setIsLoaded(true);
      })
      .catch(error => console.log(error.message));

    return () => controller.abort();
  }, [foodId]);

  const handleSelect = useCallback(
    event => {
      const { id, price } = event;
      const isItemInSelectedChoies = selectedChoices.findIndex(itemId => itemId === id);
      let updatedSelectedChoies = [...selectedChoices];

      if (isItemInSelectedChoies !== -1) {
        updatedSelectedChoies = updatedSelectedChoies.filter(itemId => itemId !== id);
        setDetails({
          ...details,
          price: Number(details.price) - Number(price),
          selectedChoices: updatedSelectedChoies,
        });
        setSelectedChoices(updatedSelectedChoies);
      } else {
        updatedSelectedChoies.push(id);
        setDetails({
          ...details,
          price: Number(details.price) + Number(price),
          selectedChoices: [...selectedChoices, id],
        });
        setSelectedChoices([...selectedChoices, id]);
      }
    },
    [selectedChoices, details]
  );

  const handleNote = e => {
    setDetails({ ...details, notes: e.target.value });
  };

  const handleSubmitFood = () => {
    dispatch(setItem(details));
    navigate(0);
  };

  return (
    <>
      <Navbar />
      <article className="text-white flex flex-col items-center justify-center px-4 md:container sm:mx-auto mb-6">
        <header className="mt-5">
          {isLoaded && <img width={215} height={166} src={details.image} title={details.name} alt={details.name} />}
        </header>
        <section className="bg-dark w-100 mt-14 w-full px-3 rounded-4xl relative pb-5">
          {isLoaded && (
            <div className="top-[-25px] absolute left-1/2 transform -translate-x-1/2">
              <button
                className="bg-primary rounded-l-4xl px-4 py-4 text-md"
                onClick={() => setDetails({ ...details, qty: details.qty - 1 })}
              >
                -
              </button>
              <span className="bg-dark font-extrabold px-4 py-4">{details.qty}</span>
              <button
                className="bg-primary rounded-r-4xl px-4 py-4 text-md"
                onClick={() => setDetails({ ...details, qty: details.qty + 1 })}
              >
                +
              </button>
            </div>
          )}
          <div className="flex flex-row mt-14">
            {isLoaded && <h1 className="text-semiwhite text-2xl font-black">{details.name}</h1>}
            {isLoaded && (
              <span className="ml-auto text-primary font-bold text-lg self-center">
                {Math.floor(details.price * details.qty)} $
              </span>
            )}
          </div>
          {isLoaded && <p className="text-md font-normal text-secondary my-4">{details.brief_desc}</p>}
          <div className="my-4">
            <h2 className="text-primary text-sm capitalize font-semibold pb-4">Ingredients</h2>
            <div className="flex flex-row gap-4 flex-wrap justify-evenly">
              {isLoaded &&
                details.ingredients.map(({ id, icon, name }) => (
                  <div key={`${name}${id}`} className="bg-semidark p-4 rounded-3xl min-w-[95px] flex flex-col">
                    <img width={22} height={22} className="block mx-auto mb-3" src={icon} title={name} alt={name} />
                    <h3 className="text-white text-sm font-bold text-center mt-auto">{name}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-primary text-sm capitalize font-semibold">Description</h2>
            <p className="my-2 text-xs text-secondaryText">{details?.desc}</p>
          </div>
          {isLoaded &&
            details.choices.map(({ title, type, items }) => (
              <div className="my-4" key={`${title}`}>
                <h2 className="text-primary text-sm capitalize font-semibold">{title}</h2>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {items.map(({ id, name, price }) => (
                    <div className="flex items-center" key={`${name}${id}`}>
                      <label className="order-2 text-sm pl-3.5" htmlFor={id}>
                        {name}
                      </label>
                      <CheckboxInput id={id} name={name} price={price} onCheck={handleSelect} />
                      <span className="order-3 text-primary text-sm font-medium ml-auto shrink">+ {price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          <div className="my-4">
            <h2 className="text-primary text-sm capitalize font-semibold pb-4">othe description</h2>
            <textarea
              placeholder="Add some notes like topping, spicy..."
              className="border-1 border-primary rounded-md py-2.5 px-3 w-full bg-dark text-xs text-secondaryText h-20"
              onChange={handleNote}
            />
          </div>
          <button
            className="bg-primary text-white flex justify-center items-center text-base w-full rounded-3xl h-[55px] font-bold"
            onClick={handleSubmitFood}
          >
            <HiOutlineShoppingCart size={23} className="mr-4" />
            Add to Cart
          </button>
        </section>
      </article>
    </>
  );
};

export default FoodDetails;
