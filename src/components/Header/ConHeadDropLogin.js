import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HeadDropLogin from "./HeadDropLogin";
import { visibleModal } from "../../state/login";

function ConHeadDropLogin() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { loginStatus, visible } = useSelector((state) => ({
    loginStatus: state.login.loginStatus,
    visible: state.login.visible,
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onVisibleModal = () => dispatch(visibleModal());
  //   const onDecrease = () => dispatch(decrease());
  //   const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <HeadDropLogin
      // 상태와
      loginStatus={loginStatus}
      visible={visible}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onVisibleModal={onVisibleModal}
      //   onDecrease={onDecrease}
      //   onSetDiff={onSetDiff}
    />
  );
}

export default ConHeadDropLogin;
