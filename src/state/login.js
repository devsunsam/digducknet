/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
// const USER_ID = 'login/USER_ID';
// const USER_PW = 'login/USER_PW';
const VISIBLE = "login/VISIBLE";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
// export const setDiff = diff => ({ type: USER_ID, diff });
// export const increase = () => ({ type: USER_PW });
export const visibleModal = () => ({ type: VISIBLE });

/* 초기 상태 선언 */
const initialState = {
  userID: "",
  userPW: "",
  loginStatus: false,
  visible: false,
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function login(state = initialState, action) {
  switch (action.type) {
    case VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
}
