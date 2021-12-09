import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id: '333', chatUser: 'Alex'},
    {id: '444', chatUser: 'Ivan'},
    {id: '555', chatUser: 'Pavel'},
];

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        addChat: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (chatUser) => {
                const id = nanoid(10)
                return {payload: {id: id, chatUser: chatUser}}
            }
        },
        delChat: {
            reducer: (state, action) => {
                state.value = (action.payload)
            },
            prepare: (id) => {
                let newChats = [...this.state.value];
                newChats = newChats.filter((item) => item.id !== id);
                return {payload: {newChats}}
            }
        }

    }
})
export const {addChat, delChat } = chatsSlice.actions
export default chatsSlice;

