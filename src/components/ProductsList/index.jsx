import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { productsSelector } from "../../redux/products/selectors";
import {
  changeProductAvailability,
  removeProductById,
} from "../../redux/products/slice";

import { ChangeProduct } from "../";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(productsSelector);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onClickAvailable = (id) => {
    dispatch(changeProductAvailability(id));
  };
  const onClickRemove = (id) => {
    dispatch(removeProductById({ id }));
  };
  const onClickChange = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "60px",
        borderBottom: "3px solid black",
      }}
    >
      {productsList &&
        productsList.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>{product.price} RUB.</p>
            <button onClick={() => onClickAvailable(product.id)}>
              {product.available ? "available" : "not available"}
            </button>
            <button onClick={() => onClickRemove(product.id)}>X</button>
            <button onClick={() => onClickChange(product)}>CHANGE</button>
          </div>
        ))}
      {selectedProduct && (
        <ChangeProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
