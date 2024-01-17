import { Fragment, useEffect, useRef, useState } from "react";
import { globalInstance } from "../../api/constant";
import { InView, useInView } from "react-intersection-observer";
import Navbar from "../../shared/components/Navbar";
import FoodCard from "./FoodCard";
import FeaturedCard from "./FeaturedCard";
import Categories from "./Categories";
import calculateElementTopOffset from "../../shared/utils/calculateElementTopOffset";
import { Link } from "react-router-dom";

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
      .then((response) => {
        const { data } = response.data;
        const transformedCategories = data.categories.map(({ id, name }) => ({
          id,
          name,
        }));
        setIsLoaded(true);
        setCategories(transformedCategories);
        setData(data);
      })
      .catch((error) => console.log(error.messsage));

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
    const selectedCategorySection =
      categoriesSections.current[selectedCategoryIndex];
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

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-row gap-3 px-4 mt-4 overflow-x-scroll pb-4">
        <FeaturedCard />
      </section>
      {isLoaded && (
        <Categories
          categories={categories}
          active={activeCategory}
          onSelect={handleSelectCategory}
        />
      )}
      {isLoaded &&
        data.categories.map(({ id, name, products }) => (
          <Fragment key={`${name}${id}`}>
            {products.length > 0 && (
              <section
                name={name}
                ref={(categorySection) =>
                  !categoriesSections.current.includes(categorySection) &&
                  categoriesSections.current.push(categorySection)
                }
              >
                <h2 className="text-white text-3xl text-center my-4">{name}</h2>
                <InView
                  as="section"
                  onChange={(inView) => handleInViewSection(inView, id)}
                  skip={disableObserver}
                  threshold={0.15}
                  className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 pb-6"
                >
                  {products.map((productInfo) => (
                    <Link
                      to={`/${productInfo.id}`}
                      key={`${productInfo.id}${productInfo.name}`}
                    >
                      <FoodCard
                        image={productInfo.image}
                        title={productInfo.name}
                        summary={productInfo.brief_desc}
                        price={productInfo.price}
                      />
                    </Link>
                  ))}
                </InView>
              </section>
            )}
          </Fragment>
        ))}
    </>
  );
};

export default Home;
