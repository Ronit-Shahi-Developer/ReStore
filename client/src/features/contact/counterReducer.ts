//without reduxtoolkit
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// action type
export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState ={
    data : 42,
    title: "Hello world"
}


// action crerators
export function decrement(amount = 1){
    return{
        type: DECREMENT_COUNTER,
        payload: amount
    }
}

export function increment(amount = 1){
    return{
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

interface CounterAction {
    type: string,
    payload : number
}
export default function counterReducer(state = initialState, action: CounterAction){
    switch (action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,
                data: state.data + action.payload
            }
            break;

            case DECREMENT_COUNTER:
                return{
                    ...state,
                    data: state.data - action.payload
                }
                break;

            default:
               return state;
    }
}