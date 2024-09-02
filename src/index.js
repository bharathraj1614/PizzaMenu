import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  console.log(pizzaData.length);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast react Pizza CO.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            imgLink={pizza.photoName}
            ingredients={pizza.ingredients}
            price={pizza.soldOut ? "SOLD OUT" : pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isWorking = hour > 9 && hour < 23;
  const [timeNow, updateTime] = React.useState(new Date().toLocaleTimeString());

  function getTime() {
    setInterval(() => {
      updateTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  React.useEffect(() => {
    getTime();
  });

  return isWorking ? (
    <div className="order">
      <footer className="footer">
        <p>We are open! order Now ({timeNow})</p>
      </footer>

      <button className="btn">Order!</button>
    </div>
  ) : (
    <footer className="footer">We're closed currently ({timeNow}) </footer>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.imgLink} alt={props.name + " image"}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>Price: {props.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
