import React, { useState, useEffect } from "react";
import Footer from "../../partComponent/Footer";
import NaviBar from "../../partComponent/NaviBar";

import { useWindupString } from "windups";

import "../../styles/Experience.scss";
import { useSelector } from "react-redux";
import PostCard from "../../partComponent/PostCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      title: "loading",
      content: "loading",
    },
  ]);
  const goto = useNavigate();

  const [text] = useWindupString(`작성된 게시물이 ${posts.length} 개 있습니다`);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
      console.log("useEffect");
    });
  }, []);

  console.log(posts);
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <h1>{text}</h1>

        <PostCard post={posts} />
        <Button
          onClick={() => {
            goto("/community");
          }}
        >
          글쓰기
        </Button>
      </div>

      <Footer />
    </div>
  );
}

//TODO: async 함수는 Promise를 반환하는데 promise에서 값을 꺼내서 state 처럼 초기화를 해서 PostCard 컴포넌트에 넘겨야한다. 근데 초기화를 한다고 해도 then 블록을 빠져나가면 없어지니..
// 잘 생각해볼것
async function getPosts() {
  const posts = [];
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      posts.push({
        title: doc.data().title,
        content: doc.data().content,
      });
    });
  } catch (e) {
    console.log("getPosts : ", e);
  }

  return posts;
}
