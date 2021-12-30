import React from "react";
import style from "../styles/Comment.module.css";
const Comment = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>댓글 0개</div>
      <ul className={style.ul}>
        <li>
          <div className={style.user}>user</div>
          <div className={style.comment}>comment</div>
        </li>
        <li>
          <div className={style.user}>user</div>
          <div className={style.comment}>comment</div>
        </li>
        <li>
          <div className={style.user}>user</div>
          <div className={style.comment}>comment</div>
        </li>
      </ul>

      <form className={style.form}>
        <input
          className={style.input}
          type="text"
          value=""
          onChange=""
          placeholder="댓글 쓰기..."
          required
        />
        <input className={style.submit} type="submit" value="올리기" />
      </form>
    </div>
  );
};

export default Comment;
