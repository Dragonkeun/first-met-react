import React from "react";
import Comment from "./Comment";
const comments = [
  {
    name: "호날두",
    comment: "나는 호날두",
  },
  {
    name: "손흥민",
    comment: "나는 한국의 호날두",
  },
  {
    name: "메시",
    comment: "나는 메시",
  },
];
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
