import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2"
import {useLocation, useNavigate} from "react-router-dom"
import axios from "axios";

const FoodCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;
    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = food =>{
      if(user && user.email){

        // TODO: send cart item to the database
        console.log(user.email, food)
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });

          }
        })
      }else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the login page
            navigate('/login',{state:{from: location}})
          }
        });
      }
    }
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
          <button
          onClick={() => handleAddToCart(item)}
           className="btn uppercase bg-gray-200 hover:bg-slate-900 text-orange-400  border-orange-400 border-0 border-b-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
