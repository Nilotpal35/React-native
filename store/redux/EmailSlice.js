import { createSlice, nanoid } from "@reduxjs/toolkit";
import { EMAIL } from "../../Data/emailData";

const initialState = {
  Email: [...EMAIL],
};

const EmailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    addEmail: {
      reducer(state, action) {
        state.Email.unshift(action.payload.newData);
      },
      prepare(formData) {
        return {
          payload: {
            newData: {
              id: nanoid(),
              ...formData,
              time:
                formData.time.length === 10 && formData.time.includes("-")
                  ? formData.time
                  : new Date().toISOString().slice(0, 10),
            },
          },
        };
        //console.log("PREPARE- DATA", formData);
      },
    },
    // addEmail: (state, action) => {
    //   console.log("New Email data", action.payload?.newData);
    //   //state.Email.unshift(action.payload?.newData);
    // },
    removeEmail: (state, action) => {
      state.Email = state.Email.filter(
        (item) => item.id !== action.payload?.deleteId
      );
    },
  },
});

export const { addEmail, removeEmail } = EmailSlice.actions;

export default EmailSlice.reducer;
