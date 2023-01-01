/*
FIXME:
1. 렌더링이 너무 많이 발생을 해서 성능측정을 해보니 이 컴포넌트에서 
대량의 재렌더링이 발생하고 있었다
2. 값이 바뀌지 않는다면 렌더링을 막아야한다
3. 메모이징을 사용해야한다

*해결*
1. 버튼 넣어서 작동 필요할때만 값 새로고침
*/
import React, { useState } from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import { db } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import RealtimeAnimation from "./subComponents/RealtimeAnimation";
import "../styles/Experience.scss";
import { IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";

import { Canvas } from "@react-three/fiber";
import { Three } from "./subComponents/Three";

export default function Experience() {
  const [moveValue, setMoveValue] = useState("Press start");
  const [btn, setBtn] = useState("off");

  const signal = (signal) => {
    if (signal === 0) return "stop";
    else if (signal === 1) return "move left";
    else if (signal === 2) return "move right";
    else return "other signal";
  };

  const getFirestoreValue = () => {
    if (btn === "off") {
      // 꺼져있는 상태
      const unsub = onSnapshot(doc(db, "experience", "fromPy"), (doc) => {
        setMoveValue(signal(doc.data().Intension));
      });

      setBtn("on");
    } else {
      // 켜져있는 상태
      setMoveValue("Press start");
      setBtn("off");
    }
    console.log("fireStoreBtn clicked");
  };
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <div className="wrapper">
          {" "}
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={getFirestoreValue}
          >
            {btn === "off" ? <PlayArrowIcon /> : <PauseIcon />}
          </IconButton>
          {btn === "off" ? <></> : <CircularProgress />}
          <RealtimeAnimation moveValue={moveValue} />
        </div>
        <div>
          <Canvas>
            <ambientLight />
            <pointLight position={[30, 30, 30]} />
            <Three position={[0, 0, 0]} moveValue={moveValue} />
          </Canvas>
        </div>
      </div>
      <Footer />
    </div>
  );
}
