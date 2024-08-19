import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const getDataFromLocalStorage = localStorage.getItem("products");
    return getDataFromLocalStorage ? JSON.parse(getDataFromLocalStorage) : [];
  } catch (error) {
    console.error("Could not load data", error);
    return [];
  }
};

const saveState = (state) => {
  try {
    const newData = JSON.stringify(state);
    localStorage.setItem("products", newData);
  } catch (error) {
    console.error("Could not save data", error);
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: loadState(),
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    deleteProduct: (state, action) => {
      const newState = state.filter((product) => product.id !== action.payload);
      saveState(newState);
      return newState;
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
