import React, { useState } from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import "../styles/Community.scss";
import { useWindupString } from "windups";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function Community() {
  const [text] = useWindupString("Community 기능이 추가될 예정입니다");
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    console.log("community : changed");
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onSubmit = (event) => {
    console.log("Community : submitted");
    event.preventDefault();
  };

  const onOkayBtnClicked = (e) => {
    Swal.fire({
      title: "글을 발행하시겠습니까?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch({
          type: "community/create",
          post: { title: post.title, content: post.content },
        });
        setPost({ title: "", content: "" });
        Swal.fire("게시글이 발행되었습니다", "", "success");
      } else if (result.isDenied) {
        Swal.fire("게시글 발행이 취소되었습니다", "", "info");
      }
    });
    e.preventDefault();
  };

  const onCancelBtnClicked = (e) => {
    e.preventDefault();
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
              <Button
                variant="contained"
                color="success"
                onClick={onOkayBtnClicked}
              >
                발행
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={onCancelBtnClicked}
              >
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
