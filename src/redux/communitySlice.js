import { createSlice } from "@reduxjs/toolkit";
const communitySlice = createSlice({
  name: "community",
  initialState: {
    totalPostNum: 0,
    posts: [],
  },
  /*
  예시 post
  {
    title:'',
    content:'',
    author:'',
  }
  */
  reducers: {
    create: (state, action) => {
      console.log(action);
      state.totalPostNum += 1;
      state.posts = [
        ...state.posts,
        { title: action.post.title, content: action.post.content },
      ];
    },
    update: (state, action) => {},
    delete: (state, action) => {
      // TODO: 추후에 이건 아예 게시글이 없으면 dispatch를 못하게 막아야함.
      if (state.totalPostNum !== 0) {
        state.totalPostNum -= 1;
        state.posts = [];
      } else {
        console.error("error: There is no post now");
      }
    },
  },
});

export default communitySlice.reducer;
