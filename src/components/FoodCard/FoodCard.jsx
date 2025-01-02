
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-2 rounded-md">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn uppercase bg-gray-200 hover:bg-slate-900 text-orange-400  border-orange-400 border-b-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
