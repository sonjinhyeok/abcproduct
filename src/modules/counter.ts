//Action * as const : read only
//action 定義　（actionは、大文字で作成する）

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREMENT' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//Action function Creator
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });

export const increaseBy = (diff:number) => ({
    type : INCREASE_BY, 
    payload : diff
});

//Action object typeを定義
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// State 初期設定
type CounterState = {
    count: number;
}
// Reduxで管理するState
const initialState: CounterState = {
    count : 0
};

// counter Reduceを作る ＊ Reduceは、イミュータブルに注意 
function counter(state: CounterState = initialState, action: CounterAction) {
    switch(action.type) {
        case INCREASE : 
            return { count : state.count + 1 };
        case DECREASE :
            return { count : state.count - 1 };
        case INCREASE_BY :
            return { count : state.count + action.payload };
        default:
            return state;
    }
}

export default counter;