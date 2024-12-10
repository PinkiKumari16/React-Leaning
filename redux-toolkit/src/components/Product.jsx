import React from "react";
import fruits from "./data.json";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/total amount/ItemsSlice";

export const Product = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="contaner">
        {fruits.map((fruit) => (
          <div className="product" key={fruit.name}>
            <div
              className="image"
              style={{ backgroundImage: `url(${fruit.image})` }}
            ></div>
            <div className="details">
              <h1>{fruit.name}</h1>
              <p>₹{fruit.price} per Kg</p>
              <div className="btns">
                <button
                  className="Btn"
                  onClick={()=>dispatch(addItem({amount: fruit.price}))}
                >
                  Add
                </button>
                <button
                  onClick={()=>dispatch(removeItem({amount: fruit.price}))}
                  className="Btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
