import "./Navbar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
const Navbar = () => {
  return (
    <div className="pothe__pothe__admin__navbar__container">
      <img src={logo} className="admin__navbar__logo" alt="" />
      <img src={profile} className="admin__navbar__profile__img" alt="" />
    </div>
  );
};

export default Navbar;
