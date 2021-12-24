import messagesSlice from "../store/messagesSlice";
const botName = 'Ustas';

export const addMessageWithThunk = (message) => (dispatch, getState) => {
    messagesSlice.actions.addMessage(message);
    if (message.fromUser !== botName) {
        const botMessage = {chatID:message.chatID, fromUser: botName, toUser: message.fromUser, msgText: 'Please, awaiting!'};
        setTimeout(() => messagesSlice.actions.addMessage(botMessage), 2000);
    }
}
