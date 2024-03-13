import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/products/slice";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && description && price) {
      dispatch(addProduct({ name, description, price }));
    } else alert("EMPTY FIELDS");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};
