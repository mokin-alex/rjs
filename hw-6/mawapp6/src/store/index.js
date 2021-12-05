import {combineReducers, createStore} from "redux";
import profileReducer from "./profile/reducer";
import chatsSlice from "./chatsSlice";
import messagesSlice from "./messagesSlice";

const reducer = combineReducers({
    chats: chatsSlice.reducer,
    messages: messagesSlice.reducer,
    profile: profileReducer,
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;