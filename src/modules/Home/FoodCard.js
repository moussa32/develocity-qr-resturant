const FoodCard = ({ image, title, price, summary }) => {
  return (
    <article className="bg-dark px-4 group rounded-lg py-3 relative mt-16 border-3 border-transparent transition-all ease-in-out duration-300 active:border-primary hover:border-primary hover:">
      <img
        src={image}
        className="absolute top-[-55px] left-0 right-0 mx-auto transition-all ease-in-out duration-300 group-hover:scale-115"
        width={116}
        height={111}
        alt="burger"
        title="burger"
      />
      <h2 className="capitalize text-white text-base my-1.5 mt-14">{title}</h2>
      <p className="text-sm text-secondary mb-1.5">{summary}</p>
      <span className="text-primary font-bold text-base">{price} $</span>
    </article>
  );
};

export default FoodCard;
