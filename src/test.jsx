import { createStore } from 'redux';
// createStoreは、ストアを作るFunction
// ストアは、１つのみ作ります。

// Reduxで管理するState
const initialState = {
  counter: 0,
  text: '',
  list: []
};

//action 定義　（actionは、大文字で作成する）
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// actionを作るFunction定義 
function increase() {
  return {
    type: INCREASE // actionは type が必須
  };
}

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text // actionの中には 、type以外のFiledも追加できます
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

// Reduceを作る ＊ Reduceは、イミュータブルに注意 
function reducer(state = initialState, action) {
  // stateの初期値を initialState に指定。
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

/* ストアを作る */
const store = createStore(reducer);

console.log(store.getState()); // 現在、store中にある状態（state）を確認する

// store中にある状態(state)が更新する時に呼び出されるfunction
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// actionを dispatch する
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('こんにちは'));
store.dispatch(addToList({ id: 1, text: 'WOW' }));