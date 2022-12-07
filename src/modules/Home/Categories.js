import { useState } from "react";
import { InView } from "react-intersection-observer";

const Categories = ({ categories, active, onSelect }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleSticky = (inView) => {
    if (!inView) setIsSticky(true);
  };

  return (
    <InView
      as="section"
      onChange={handleSticky}
      className={`flex flex-row gap-3 px-4 mt-4 overflow-x-scroll pb-4 ${
        isSticky ? "sticky top-0 z-50 backdrop-blur-lg py-5" : "relative"
      }`}
      rootMargin={"-40px 0px 30px 0px"}
    >
      {categories.map(({ id, name }) => (
        <div
          key={`${id}${name}`}
          className={`${
            active == id ? "bg-primary" : "bg-semiwhite"
          } rounded-2xl py-2 px-6 text-sm font-medium group transition-all ease-in-out duration-300 active:bg-primary`}
          onClick={() => onSelect(id)}
        >
          <span className={`${active == id ? "text-white" : "text-black"} capitalize group-active:text-white`}>
            {name}
          </span>
        </div>
      ))}
    </InView>
  );
};

export default Categories;
