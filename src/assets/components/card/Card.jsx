import "./Card.css";
import InformationsBox from "../informations-box/Informations";

function Card() {
  return (
    <div id="card">
      <img src="https://unsplash.it/250/250" alt="paisage-image" />
      <InformationsBox />
    </div>
  );
}

export default Card;
