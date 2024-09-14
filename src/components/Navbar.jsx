import "../App.css"
import Register from './Register.jsx'

export default function Navbar() {
  return (
    <><div className = "navbar">
      <img className="logo-icon"src = "./src/assets/logo_icon.png"></img>
      <img className="logo-loo"src = "./src/assets/logo_loo.png"></img>
      <Register></Register>
      </div>
    </>
  );
}
