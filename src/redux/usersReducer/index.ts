import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  usersList: [] as any[],
  connectionsList: [] as any[],
  deletedUsersList: [] as any[],
  currentDeleteduser: null as any,
  available: 0,
  error: null as any,
  success: false,
  message: "",
};

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.available = action.payload.available;
      state.usersList = action.payload.usersList;
    },
    setConnections(state, action) {
      state.connectionsList = action.payload;
    },
    addUser(state, action) {
      const newUser = action.payload as any;
      const existingUser = state.usersList.find(
        (user: any) => user.id === newUser.id
      );

      if (!existingUser) {
        state.usersList.push(newUser);
        state.available++;
      }
    },
    removeUser(state, action) {
      const id = action.payload;

      const existingUser = state.usersList.find((user: any) => user.id === id);
      if (existingUser) {
        state.usersList = state.usersList.filter((user: any) => user.id !== id);
        state.deletedUsersList.push(existingUser);
        state.currentDeleteduser = existingUser;
        state.available--;
      }
    },
    clearDeleted(state) {
      state.deletedUsersList = [];
    },
  },
});

export const { setUsers, addUser, removeUser, clearDeleted } =
  usersReducer.actions;

export default usersReducer.reducer;
