import {createSlice} from "@reduxjs/toolkit";

const botName = 'Ustas';

const initialState = [
    {chatID:'333', fromUser: 'Alex', toUser: botName, msgText: 'Алекс Юстасу шлёт привет!'},
    {chatID:'333', fromUser: botName, toUser: 'Alex', msgText: 'Юстас Алексу шлёт ответ!'},
    {chatID:'444', fromUser: 'Ivan', toUser: botName, msgText: 'шлёт привет'},
];


const messagesSlice = createSlice({
    name: 'massages',
    initialState,
    reducers: {
        addMessage(state, action){
            state.push(action.payload)
        },
    }
})

export const {addMessage} = messagesSlice.actions
export default messagesSlice;

// Это другой вариант хранения данных (не реализован)
/*const initialState = {
    id1: {
        name: "Chat1",
        messages: [
            {fromUser: 'Alex', toUser: botName, msgText: 'Алекс Юстасу шлёт привет!'},
            {fromUser: botName, toUser: 'Alex', msgText: 'Юстас Алексу шлёт ответ!'},
        ],
    },
    id2: {
        name: "Chat2",
        messages: [
            {fromUser: 'Ivan', toUser: botName, msgText: 'шлёт привет'},
            ],
    },
};*/



