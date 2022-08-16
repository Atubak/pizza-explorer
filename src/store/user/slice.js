import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      console.log("state", current(state));
      // state.favorites.forEach((favId, index) => {
      //   if (favId === action.payload) {
      //     console.log(favId, action.payload);
      //     state.favorites.filter((favoriteId) => action.payload !== favoriteId);
      //   } else {
      //     state.favorites.push(action.payload);
      //   }
      // });
      console.log(action.payload);
      const newPizzas = state.favorites.includes(action.payload)
        ? state.favorites.filter((favoriteId) => action.payload !== favoriteId)
        : [...state.favorites, action.payload];

      state.favorites = newPizzas;
      console.log("test pizzas", newPizzas);
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
