import React, { useState } from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import "../styles/Community.scss";
import { useWindupString } from "windups";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
export default function Community() {
  const [text] = useWindupString("Community 기능이 추가될 예정입니다");
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    console.log("community : changed");
    setPost({
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (event) => {
    console.log("Community : submitted");
    event.preventDefault();
  };

  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <div className="form-container">
          <form onSubmit={onSubmit} className="inputForm">
            <div id="title-wrapper">
              <TextField
                id="outlined-basic"
                placeholder="제목을 입력해주세요"
                variant="outlined"
                type="text"
                value={post.title}
                onChange={onChange}
                name="title"
                fullWidth
              />
            </div>
            <div id="content-wrapper">
              <TextField
                id="standard-multiline-static"
                multiline
                placeholder="게시글 규칙을 준수해주세요"
                variant="standard"
                type="text"
                value={post.content}
                onChange={onChange}
                name="content"
                rows={20}
                fullWidth
              />
            </div>
            <div id="button-wrapper">
              <Button variant="contained" color="success">
                발행
              </Button>
              <Button variant="outlined" color="error">
                취소
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
