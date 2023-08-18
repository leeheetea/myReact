import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    name: "",
    age: 0,
  },
  reducers: {
    changeName(state) {
      state.name = "park";
    },

    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count: 2,
    },
    {
      id: 1,
      name: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count: 1,
    },
    {
      id: 2,
      name: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count: 2,
    },
  ],
  reducers: {
    increaseCount(state, action) {
      const number = state.findIndex((sta) => {
        return sta.id === action.payload;
      });
      console.log(number);
      state[number].count++;
    },
    decreaseCount(state, action) {
      const number = state.findIndex((sta) => {
        return sta.id === action.payload;
      });
      if (state[number].count > 0) {
        state[number].count--;
      } else if (state[number].count === 0) {
        alert("수량은 마이너스가 될 수 없습니다.");
      }
    },
    removeItem(state, action) {
      const number = state.findIndex((sta) => {
        return sta.id === action.payload;
      });
      state.splice(number, 1);
    },
    addItem(state, action) {
      const number = state.findIndex((sta) => {
        return sta.id === action.payload;
      });
      if (number !== -1) {
        state[number].count++;
      } else {
        state.push(action.payload);
      }
    },
    sortByName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
});

export let { changeName, increaseAge } = user.reducer;

export let { increaseCount, decreaseCount, addItem, deleItem, sortName } =
  cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
