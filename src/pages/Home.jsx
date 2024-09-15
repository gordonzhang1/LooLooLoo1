import "./Home.css";
import { NavLink } from "react-router-dom";


export default function Home() {


  return (
    <>
      <div className="home-div">
        <img className="logo-icon-home" src="./src/assets/logo_icon.png"></img>
        <img className="logo-loo-home" src="./src/assets/logo_loo.png"></img>
        <NavLink to = "/dashboard"><button className="login-page-button" >TO DA LOO</button></NavLink>
        <NavLink to = "/login"><button className="create-account-button">LINK DEVICE</button></NavLink>
      </div>


    </>
  );
}
