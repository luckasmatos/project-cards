import "./Informations.css";

function Informations() {
  return (
    <div id="informations">
      <h1>Ovos mexidos</h1>
      <p id="description">Ovos mexidos com aspargos</p>
      <p id="price">7.00€</p>
      <div id="input-box">
        <button class="quantity-button decrease">-</button>
        <span id="counter">1</span>
        <button class="quantity-button increase">+</button>
      </div>
    </div>
  );
}

export default Informations;
