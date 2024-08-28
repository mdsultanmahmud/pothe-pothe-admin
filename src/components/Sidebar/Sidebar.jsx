import "./Sidebar.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdFastfood, MdOutlineAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="pothe__pothe__sidebar__container">
      <div className="pothe__pothe__sidebar__items">
        <NavLink to={"/admin/add"} className="pothe__pothe__sidebar__item">
          <IoMdAddCircleOutline className="icon" />
          <p>Add Food</p>
        </NavLink>
        <hr />
        <NavLink to={"/admin/foods"} className="pothe__pothe__sidebar__item">
          <MdFastfood className="icon" />
          <p>All Foods</p>
        </NavLink>
        <hr />

        <NavLink to={"/admin/orders"} className="pothe__pothe__sidebar__item">
          <MdOutlineAddShoppingCart className="icon" />
          <p>Orders</p>
        </NavLink>
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
