import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/products/slice";

export const ChangeProduct = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleAvailableChange = (e) => setAvailable(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateProduct({ id: product.id, name, description, price, available })
    );

    onClose();
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Available:</label>
          <input
            type="checkbox"
            checked={available}
            onChange={handleAvailableChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
