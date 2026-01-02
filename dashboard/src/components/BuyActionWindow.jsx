import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeBuyWindow,closeSellWindow } = useContext(GeneralContext); //  use context

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:8000/neworder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode,
    }).then(() =>{
      // alert(`${mode} order placed successfully`);
      mode === 'BUY' ? closeBuyWindow() : closeSellWindow();
    })
  };

  const handleCancelClick = () => {
    mode === 'BUY' ? closeBuyWindow() : closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            {mode == 'BUY' ? "Buy" : 'Sell'}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
