import React from "react";
import Footer from "../../partComponent/Footer";
import NaviBar from "../../partComponent/NaviBar";

import { useWindupString } from "windups";

import "../../styles/Experience.scss";
import { useSelector } from "react-redux";
import PostCard from "../../partComponent/PostCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Posts() {
  const goto = useNavigate();
  const state = useSelector((state) => {
    return state.communityReducer.posts;
  });

  const [text] = useWindupString(`작성된 게시물이 ${state.length} 개 있습니다`);

  console.log(state);

  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <h1>{text}</h1>
        <PostCard post={state} />
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
