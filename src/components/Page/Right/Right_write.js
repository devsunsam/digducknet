import React, { Component } from "react";
import axios from "axios";

import "./Right_write.css";

const Right_write = () => {
  const submitBoard = async function () {
    const title = document.getElementsByName("title")[0].value.trim();
    const contents = document.getElementsByName("contents")[0].value.trim();

    if (title === "") {
      return alert("제목입력해주세요");
    } else if (contents === "") {
      return alert("내용입력해주세요");
    }

    const data = { title: title, contents: contents };
    const res = await axios("/add/board", {
      method: "POST",
      data: data,
      headers: new Headers(),
    });

    if (res.data) {
      alert("글 등록이 완료되었습니다.");
      return window.location.replace("/");
    }
  };
  return (
    <div>
      <div id="post_submit">
        <button onClick={() => submitBoard()}> 포스트 등록 </button>
      </div>
    </div>
  );
};

export default Right_write;
