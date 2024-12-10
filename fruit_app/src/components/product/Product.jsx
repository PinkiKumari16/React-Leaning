import React from "react";
import fruits from "./data.json";
import { useDispatch } from "react-redux";
import { Increment } from "../../actions/Increment";
import { Decrement } from '../../actions/Increment'

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
                  onClick={()=>dispatch(Increment(fruit.price))}
                >
                  Add
                </button>
                <button
                  className="Btn"
                  onClick={() => dispatch(Decrement(fruit.price))}
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
