import { useState } from "react";
import "./Foods.css";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { url } from "../../utils/getUrl";
const Foods = () => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    try {
      const res = await axios.get(`${url?.baseURL || url?.deploymentURL}/food`);
      if (res.data.success) {
        setFoods(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  const deleteFoodItem = async (foodId) => {
    try {
      const res = await axios.delete(`${url?.baseURL || url?.deploymentURL}/food/delete/${foodId}`);
      await getFoods();
      if (res.data.success) {
        toast.success("Food item deleted from database.");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <div className="pothe__pothe__all__foods__container">
      <h2 className="foos__title">Our All Foods</h2>
      <div className="foods__list__items">
        <div className="food__list__item__table food__list__item__title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {foods?.map((food, index) => {
          return (
            <div key={index} className="food__list__item__table">
              <img
                src={`http://localhost:5000/images/${food.image}`}
                alt="Food Image"
              />
              <p>{food?.name}</p>
              <p>${food?.price}</p>
              <p>{food?.category}</p>
              <p
                className="food__item__action__btn"
                onClick={() => deleteFoodItem(food?._id)}
              >
                <RxCross1 size={18} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
