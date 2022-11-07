import { createStore } from "redux";
import todoReducers from "./reducers/todoReducers";


const initialState=[];
const store=createStore(
    todoReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;