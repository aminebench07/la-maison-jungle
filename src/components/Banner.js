import "../styles/Banner.css";
import logo from "../assets/leaf.png";

function Banner() {
  return (
    <div className="lmj-banner">
      <img src={logo} className="lmj-logo" alt="logo la maison jungle"></img>
      <h1 className="lmj-title">La maison jungle</h1>
    </div>
  );
}

export default Banner;
