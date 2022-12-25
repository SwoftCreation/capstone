import React from "react";
import { CardContent, CardActions, Typography, Button } from "@mui/material";

export default function PostCard(props) {
  const state = props.post;
  return (
    <div>
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
          <CardActions>
            <Button size="small">글 확인하기</Button>
          </CardActions>
          <hr />
        </CardContent>
      ))}
    </div>
  );
}
