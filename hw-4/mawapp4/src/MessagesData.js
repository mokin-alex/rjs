
const botName = 'Ustas';
//const initMessages =[{fromUser: '', toUser: '', msgText: ''},];
const initMessages = [
    {chatID:'333', fromUser: 'Alex', toUser: botName, msgText: 'Алекс Юстасу шлёт привет!'},
    {chatID:'333', fromUser: botName, toUser: 'Alex', msgText: 'Юстас Алексу шлёт ответ!'},
    {chatID:'444', fromUser: 'Ivan', toUser: botName, msgText: 'шлёт привет'},
];

function filterByChatID(chatID) {
    return initMessages.filter(
        msg => msg.chatID===chatID.toString()
    );
}

//let chatsIds = [...new Set(initMessages.map(msg =>msg.chatID))];
//let chatsFromUser = [...new Set(initMessages.map(msg =>msg.fromUser!==botName ? msg.fromUser : ''  ))];

export { botName, initMessages, filterByChatID};
