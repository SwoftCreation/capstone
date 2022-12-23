import React, { useState } from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import { useWindupString } from "windups";

export default function Community() {
  const [text] = useWindupString("Community 기능이 추가될 예정입니다");
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const onChange = () => {};

  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <h1>{text}</h1>
        <div className="front-wrapper">
          <form>
            <label>
              title
              <input
                type="text"
                value={post.title}
                onChange={onChange}
                name="title"
              />
            </label>
            <label>
              content
              <textarea type="text" value={post.content} onChange={onChange} />
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
