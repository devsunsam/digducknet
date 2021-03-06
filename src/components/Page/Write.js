import React from "react";
import "./Write.css";

const Write = () => {
  return (
    <div className="Write">
      <div>
        <input type="text" id="title_txt" name="title" placeholder="제목" />
      </div>

      <div>
        <textarea
          id="content_txt"
          name="contents"
          placeholder="내용을 입력하세요."
        ></textarea>
      </div>
    </div>
  );
};

export default Write;
