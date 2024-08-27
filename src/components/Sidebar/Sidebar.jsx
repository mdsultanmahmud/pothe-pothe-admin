import "./Sidebar.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdFastfood, MdOutlineAddShoppingCart } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="pothe__pothe__sidebar__container">
      <div className="pothe__pothe__sidebar__items">
        <div className="pothe__pothe__sidebar__item">
          <IoMdAddCircleOutline className="icon" />
          <p>Add Food</p>
        </div>
        <hr />
        <div className="pothe__pothe__sidebar__item">
          <MdFastfood className="icon" />
          <p>All Foods</p>
        </div>
        <hr />

        <div className="pothe__pothe__sidebar__item active">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </div>
        <hr />
        <div className="pothe__pothe__sidebar__item">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </div>
        <hr />
        <div className="pothe__pothe__sidebar__item">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </div>
        <hr />
        <div className="pothe__pothe__sidebar__item">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </div>
        <hr />
        <div className="pothe__pothe__sidebar__item">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
