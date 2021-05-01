import React, { useState, useEffect } from "react";
import queryString from "query-string";

import axios from "axios";
import Search from "./Search";
import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

const ArticleList = (props) => {
  const [state, setState] = useState({
    data: [],
    page: 1,
    limit: 5,
    all_page: [],
  });

  useEffect(() => {
    getListData();
    return () => {};
  }, []);

  const getListData = async function () {
    let limit = state.limit;
    const page = setPage();

    let search = queryString.parse(props.location.search);
    console.log(search);
    if (search) {
      search = search.search;
    }
    // console.log(search)

    const total_cnt = await axios("/get/board_cnt", {
      method: "POST",
      headers: new Headers(),
      data: { search: search },
    });

    console.log(total_cnt);

    const total_list = await axios("/get/board", {
      method: "POST",
      headers: new Headers(),
      data: { limit: state.limit, page: state.page, search: search },
    });

    let page_arr = [];
    console.log(total_cnt, limit);
    let end = Math.ceil(total_cnt.data.cnt / limit);

    console.log(end);
    for (let i = 1; i <= end; i++) {
      page_arr.push(i);
    }

    setState({ ...state, data: total_list, all_page: page_arr });
  };
  const changePage = function (el) {
    setState({ page: el });
    sessionStorage.setItem("page", el);

    return getListData();
  };

  const setPage = function () {
    if (sessionStorage.page) {
      setState({ ...state, page: Number(sessionStorage.page) });
      return Number(sessionStorage.page);
    }
    setState({ ...state, page: 1 });
    return 1;
  };

  const list = state.data.data;
  const { all_page, page } = state;

  return (
    <div>
      <div className="d-flex flex-column border rounded rounded-4 ">
        {list && list.length > 0
          ? list.map((el, key) => {
              const view_url = "/view/" + el.board_id;
              return (
                <div className="d-flex border-bottom" key={key}>
                  <div className="d-flex m-1">
                    <Link to={view_url}> {el.title} </Link>
                  </div>
                  
                  {/* <div className="acenter"> {el.date.slice(0, 10)} </div> */}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ArticleList;
