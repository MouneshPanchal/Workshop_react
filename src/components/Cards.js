import react from "react";
import{toast} from 'react-toastify';

const Cards = ({ id, name, info, image, price }) => {

    const bookingHandler =(id)=>{
        console.log("booked", id);
        toast.success("You have Successfully Book🤩");
        // toast.error("failed");
        // toast.info("info here")
        // toast.warning("info here")
        
    }
  return (
    <div className="card">
      <img src={image} className="image" alt="error"></img>

      <div className="tour-details">
        <h2 className="tour-price">{price}</h2>
        <h2 className="tour-name">{name}</h2>
      </div>

      <div className="description">
        {info}
      </div>

      <button className="btn-red" onClick={()=>bookingHandler(id)}>
        Book Now
      </button>
    </div>
  );
};

export default Cards;