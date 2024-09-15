import "./Home.css";
import { NavLink } from "react-router-dom";


export default function Home() {


  return (
    <>
      <div className="home-div">
        <img className="logo-icon-home" src="https://alanbui.ca/assets/images/hackthenorth/logo_icon.png"></img>
        <img className="logo-loo-home" src="https://alanbui.ca/assets/images/hackthenorth/logo_loo.png"></img>
        <NavLink to = "/dashboard"><button className="login-page-button" >TO DA LOO</button></NavLink>
        <NavLink to = "/login"><button className="create-account-button">LINK DEVICE</button></NavLink>
      </div>


    </>
  );
}
