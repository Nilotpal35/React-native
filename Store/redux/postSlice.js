import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: "c1",
      author: "Nilotpal",
      title: "Narayana",
      comment:
        "Narayana is the god which containes all the universe. Everything in this universe happen on his order.",
      emoji: {
        like: 0,
        dislike: 0,
        heart: 0,
        comment: 0,
      },
    },
    {
      id: "c2",
      author: "Shreyashi",
      title: "Krishna",
      comment:
        "krishna is the god which containes all the universe. Everything in this universe happen on his order.",
      emoji: {
        like: 0,
        dislike: 0,
        heart: 0,
        comment: 0,
      },
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload.post);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    },
    editPost: (state, action) => {
      const updatedPost = action.payload.post;
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.post.id
      );
      if (index != -1) {
        state.posts[index].title = updatedPost.title;
        state.posts[index].comment = updatedPost.comment;
        state.posts[index].author = updatedPost.author;
      }
    },
    addEmoji: (state, action) => {
      const updatedEmoji = action.payload.like;
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index != -1) {
        if (updatedEmoji === "like") {
          state.posts[index].emoji.like++;
        } else if (updatedEmoji === "dislike") {
          state.posts[index].emoji.dislike++;
        } else if (updatedEmoji === "heart") {
          state.posts[index].emoji.heart++;
        } else if (updatedEmoji === "comment") {
          state.posts[index].emoji.comment++;
        }
      }
    },
    removeEmoji: (state, action) => {},
  },
});

export default postSlice.reducer;

export const { addPost, removePost, editPost, addEmoji, removeEmoji } =
  postSlice.actions;
