import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  hint: string;
}
const initialState: CounterState = {
  value: 0,
  hint: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.hint = state.value % 5 == 0 ? "It's a multiple of 5" : "";
    },
    decrement: (state) => {
      state.value -= 1;
      state.hint = state.value % 5 == 0 ? "It's a multiple of 5" : "";
    },
    reset: (state) => {
      state.value = 0;
      state.hint = "";
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.hint = state.value % 5 == 0 ? "It's a multiple of 5" : "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(incrementAsync.pending, (_) => {
        console.log("Increment Async : Pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      ),
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
