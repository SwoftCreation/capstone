import React from "react";
import { useNavigate } from "react-router-dom";
import "./NaviBar.scss";
import Swal from "sweetalert2";

export default function NaviBar() {
  const [user, setUser] = React.useState({
    isLogined: false,
    playerCode: "empty",
    passwdIcon: "empty",
  });

  console.log("NaviBar rendered");
  console.table(user);
  const goto = useNavigate();

  /*
  TODO:로그인 구현
  아이디 : player code로 대체
  패스워드 : 선지 5개 중 하나 선택으로 변경

   */

  React.useEffect(() => {
    const toggleBtn = document.querySelector(".menu-icon");
    const menus = document.querySelector(".menu-frame");
    const signBox = document.querySelector(".sign-in-frame");
    toggleBtn.addEventListener("click", () => {
      menus.classList.toggle("close");
      signBox.classList.toggle("close");
    });
  }, []);

  const login = async () => {
    const userInfo = { playerCode: "empty", passwdIcon: "empty" };

    userInfo.playerCode = await Swal.fire({
      title: "input your PLAYER CODE",
      input: "password",
      inputPlaceholder: "000000",
      inputAttributes: {
        maxlength: 6,
        // 최대 가능한 자리는 6자리
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
    });

    // if (userInfo.playerCode) {
    //   Swal.fire("player Code accepted! welcome!");
    //   await setUser({ playerCode: userInfo.playerCode });
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "enter-in canceled",
    //   });
    // }

    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "RED",
          "#00ff00": "GREEN",
          "#0000ff": "BLUE",
          "#ffd000": "YELLOW",
        });
      }, 1000);
    });

    userInfo.passwdIcon = await Swal.fire({
      title: "select your passwd ICON",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something";
        }
      },
    });

    setUser({ ...userInfo, isLogined: !user.isLogined });
  };

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <div>
          <p
            id="logo-p"
            onClick={() => {
              goto("/");
            }}
          >
            Player ONE
          </p>
        </div>
        <div className="menu-icon">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
      <div className="menu-frame">
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Products");
            }}
          >
            Products
          </p>
        </div>
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Community");
            }}
          >
            Community
          </p>
        </div>
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Overview");
            }}
          >
            Overview
          </p>
        </div>
      </div>
      <div className="sign-in-frame">
        <p id="sign-p" onClick={login}>
          sign in
        </p>
      </div>
    </div>
  );
}

// NaviBar END
