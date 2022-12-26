import { createSlice } from "@reduxjs/toolkit";

import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
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

      //firestore 추가
      addToFirestore(state, action);
    },
    update: (state, action) => {},
    delete: (state, action) => {
      // TODO: 추후에 이건 아예 게시글이 없으면 dispatch를 못하게 막아야함.
      if (state.totalPostNum !== 0) {
        state.totalPostNum -= 1;
        //TODO: 이 기능은 테스트 해봐야함 아직 테스트 안해봄
        state.posts = state.posts.filter((post) => post.id !== action.id);
      } else {
        console.error("error: There is no post now");
      }
    },
  },
});

async function addToFirestore(state, action) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      postNum: state.totalPostNum,
      title: action.post.title,
      content: action.post.content,
    });
  } catch (e) {
    console.log("firestore error : " + e);
  }
}
export default communitySlice.reducer;
