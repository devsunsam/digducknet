import React, { useState, useEffect } from "react";
import axios from "axios";
import "./View.css";

const View = (props) =>{
  const [state, setState] = useState({
    board_id:0,
    title:"",
    contents:"",
    date:""
  });
  
  useEffect(() => {
    getData()
    return () => {
    };
  }, []);

  const getData = async function () {
    const board_id = props.match.params.data;
    
    console.log(props)
    const getData = await axios("/get/board_data", {
      method: "POST",
      headers: new Headers(),
      data: { id: board_id },
    });

    console.log(getData.data.data)
    // const date =
    //   getData.data[0].date.slice(0, 10) +
    //   " " +
    //   getData.data[0].date.slice(11, 16);
    const v= getData.data.data[0]
    console.log(typeof(state))
    console.log(typeof(v))
    
    return setState({...state, title:v.title});
    // return this.setState({ data: getData, date: date });
  };

  console.log(state.title)
  return (
    <div className="Write">
      {state.title ? (
        <div>
          <div className="top_title">
            <input
              type="text"
              id="title_txt"
              name="title"
              defaultValue={state.title}
              readOnly
            />
            
            <div className="date_div"></div>
            <div>{state.title}</div>
          </div>

          <div>
            <textarea
              id="content_txt"
              name="contents"
              defaultValue={state.title}
              readOnly
            ></textarea>
          </div>
        </div>
      ) : null}
    </div>
  );
}


export default View;
