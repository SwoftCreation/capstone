import React from "react";
import { CardContent, CardActions, Typography, Button } from "@mui/material";
import "./PostCard.scss";
import Swal from "sweetalert2";

export default function PostCard(props) {
  const state = props.post;
  console.log("***전달받은 props***");
  console.log(JSON.stringify(props));

  const onDetailBtnClicked = () => {};
  const onDeleteBtnClicked = () => {
    Swal.fire({
      title: "삭제하시겠습니까?",
    });
  };
  return (
    <div className="CardContainer">
      {state.map((element, key) => (
        <CardContent>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              playerCode: 012345
            </Typography>
            <Typography variant="h5" component="div">
              {element.title}
            </Typography>
            <Typography variant="body2">{element.content}</Typography>
          </CardContent>
          <div className="CardButtons">
            <CardActions>
              <Button size="small" onClick={onDetailBtnClicked}>
                글 확인하기
              </Button>
            </CardActions>
            <CardActions onClick={onDeleteBtnClicked}>
              <Button size="small">삭제</Button>
            </CardActions>
          </div>

          <hr />
        </CardContent>
      ))}
    </div>
  );
}
