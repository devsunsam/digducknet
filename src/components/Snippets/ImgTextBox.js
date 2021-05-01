import React from "react";

const ImgTextBox = (icon, text) => {
  return (
    <div>
      {icon?(
        {icon}
        )
        : null
      }
      {text?(
        {text}
        )
        : null
      }
    </div>
  );  
};

export default ImgTextBox;
