import { useState } from "react";
import "./AddFood.css";
import { FaRegImage } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { url } from "../../utils/getUrl";

const AddFood = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const inputHandler = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleAddFood = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const res = await axios.post(
      `${url?.baseURL || url?.deploymentURL}/food/add`,
      formData
    );
    if (res.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success("Food Added in the Database");
    } else {
      console.log(res.data);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="pothe__pothe__add__food__container">
      <form
        onSubmit={handleAddFood}
        className="pothe__pothe___add__food__form__container flex__col"
      >
        <div className="add__food__img__upload flex__col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="upload__img__icon"
              />
            ) : (
              <FaRegImage className="upload__img__icon" />
            )}
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            id="image"
          />
        </div>
        <div className="add__food__name flex__col">
          <p>Food Name</p>
          <input
            onChange={inputHandler}
            value={data?.name}
            type="text"
            placeholder="Type here..."
            name="name"
            required
          />
        </div>
        <div className="add__food__description flex__col">
          <p>Food Description</p>
          <textarea
            onChange={inputHandler}
            value={data?.description}
            placeholder="Type here..."
            name="description"
            rows={6}
            required
          />
        </div>
        <div className="add__food__category__price">
          <div className="add__food__category flex__col">
            <p>Food Category</p>
            <select name="category" onChange={inputHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwice">Sandwice</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Pure Veg">Pure Veg</option>
            </select>
          </div>
          <div className="add__food__price flex__col">
            <p>Food Price</p>
            <input
              onChange={inputHandler}
              value={data?.price}
              type="number"
              name="price"
              placeholder="$10"
            />
          </div>
        </div>
        <button type="submit" className="add__food__btn">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
