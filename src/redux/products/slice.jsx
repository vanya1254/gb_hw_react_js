import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [
    {
      id: 1710337799318,
      name: "Item 21",
      available: false,
      description: "This is description for item 4",
      price: 24,
    },
    {
      id: 17103747799318,
      name: "Item 31",
      available: true,
      description: "This is description for item 9",
      price: 32,
    },
    {
      id: 1710237799318,
      name: "Item 11",
      available: false,
      description: "This is description for item 3",
      price: 184,
    },
    {
      id: 17105799318,
      name: "Item 81",
      available: false,
      description: "This is description for item 9",
      price: 207,
    },
    {
      id: 17103399318,
      name: "Item 61",
      available: false,
      description: "This is description for item 1",
      price: 38,
    },
    {
      id: 171899318,
      name: "Item 41",
      available: false,
      description: "This is description for item 7",
      price: 206,
    },
    {
      id: 1710437799318,
      name: "Item 51",
      available: true,
      description: "This is description for item 7",
      price: 99,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList = [
        ...state.productsList,
        { id: Date.now(), ...action.payload, available: true },
      ];
    },
    removeProductById: (state, action) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateProduct: (state, action) => {
      const updatingProduct = state.productsList.find(
        (product) => product.id === action.payload.id
      );
      if (updatingProduct) {
        state.productsList = [
          ...state.productsList.filter(
            (product) => product.id !== updatingProduct.id
          ),
          action.payload,
        ];
      }
    },
    changeProductAvailability: (state, action) => {
      state.productsList = state.productsList.map((product) =>
        product.id === action.payload
          ? { ...product, available: !product.available }
          : product
      );
    },
  },
});

export const {
  addProduct,
  removeProductById,
  updateProduct,
  changeProductAvailability,
} = productsSlice.actions;

export default productsSlice.reducer;
