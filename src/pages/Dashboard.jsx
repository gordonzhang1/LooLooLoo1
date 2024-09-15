import './Dashboard.css';
import Menu from '../components/Menu.jsx';
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="homepage-container">
        <div className="navbar-app">
        </div>
      </div>

      <section id="map">
        <iframe
          href="https://www.mappedin.com/"
          title="Mappedin Map"
          name="Mappedin Map"
          allow="clipboard-write; web-share"
          width="100%"
          height="650"
          frameBorder="0"
          // style="border:0"
          src="https://app.mappedin.com/map/66ce20fdf42a3e000b1b0545?embedded=true"
        ></iframe>
      </section>
      <NavLink to = "/"><button className = "return-button2"> ⬅ </button></NavLink>

      <Menu></Menu>
    </>
  );
}