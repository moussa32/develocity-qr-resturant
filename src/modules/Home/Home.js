import { useEffect, useRef, useState } from "react";
import { globalInstance } from "../../api/constant";
import { InView, useInView } from "react-intersection-observer";
import mockData2 from "../../assets/images/mock-data-2.png";
import mockData1 from "../../assets/images/mock-data-1.png";
import pizza1 from "../../assets/images/pizza-mock-data-1.png";
import pizza2 from "../../assets/images/pizza-mock-data-2.png";
import pizza3 from "../../assets/images/pizza-mock-data-3.png";
import pizza4 from "../../assets/images/pizza-mock-data-4.png";
import Navbar from "../../shared/components/Navbar";
import FoodCard from "./FoodCard";
import FeaturedCard from "./FeaturedCard";
import Categories from "./Categories";
import calculateElementTopOffset from "../../shared/utils/calculateElementTopOffset";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [disableObserver, setDisableObserver] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const categoriesSections = useRef([]);
  let { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    globalInstance
      .get("/home", { signal })
      .then(response => {
        const { data } = response.data;
        const transformedCategories = data.categories.map(({ id, name }) => ({
          id,
          name,
        }));
        setIsLoaded(true);
        setCategories(transformedCategories);
        setData(data);
      })
      .catch(error => console.log(error.messsage));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (activeCategory === selectedCategory) {
      setDisableObserver(false);
      setSelectedCategory(null);
    }
  }, [activeCategory]);

  useEffect(() => {
    const selectedCategoryIndex = selectedCategory - 1;
    const selectedCategorySection = categoriesSections.current[selectedCategoryIndex];
    ref(selectedCategorySection);

    if (selectedCategory) {
      setDisableObserver(true);
      window.scrollTo({
        top: calculateElementTopOffset(selectedCategorySection),
        behavior: "smooth",
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (inView) setActiveCategory(selectedCategory);
  }, [inView]);

  const handleInViewSection = (inView, categoryId) => {
    if (inView) {
      setActiveCategory(categoryId);
    }
  };

  const handleSelectCategory = categoryId => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-row gap-3 px-4 mt-4 overflow-x-scroll pb-4">
        <FeaturedCard />
      </section>
      {isLoaded && <Categories categories={categories} active={activeCategory} onSelect={handleSelectCategory} />}
      {isLoaded &&
        data.categories.map(({ id, name, products }) => (
          <section
            key={`${name}${id}`}
            name={name}
            ref={categorySection =>
              !categoriesSections.current.includes(categorySection) && categoriesSections.current.push(categorySection)
            }
          >
            <h2 className="text-white text-3xl text-center my-4">{name}</h2>
            <InView
              as="section"
              onChange={inView => handleInViewSection(inView, id)}
              skip={disableObserver}
              threshold={0.15}
              className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 pb-6"
            >
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
            </InView>
          </section>
        ))}
    </>
  );
};

export default Home;
