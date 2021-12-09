import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile/reducer";
import chatsSlice from "./chatsSlice";
import messagesSlice from "./messagesSlice";
import persistReducer from "redux-persist/es/persistReducer";
//import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    chats: chatsSlice.reducer,
    messages: messagesSlice.reducer,
    profile: profileReducer,
})

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, reducer);

//не понятно как работать с мидлваре и слайсом
export const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
}

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);

export default store;




