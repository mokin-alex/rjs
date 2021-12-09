  import {useEffect} from "react";
import {Container} from "@mui/material";
import MessageInput from "./MessageInput";
import Message from "./Message";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import messagesSlice from "../store/messagesSlice";
  import store from "../store";

export default function ChatView() {
    const botName = 'Ustas';
    const  {chatId}  = useParams();
    let allMessages = useSelector(state =>state.messages);
    let msgs= allMessages.filter(msg => msg.chatID===chatId)
    //пока заглушка для несуществующих ID
    if (msgs.length===0) { msgs = [{chatID:chatId, fromUser: '', toUser: '', msgText: ''},]}

    const newMessage=(input) =>{
        store.dispatch(messagesSlice.actions.addMessage(input))
    }

    useEffect(() => {
        const lastMsg = msgs[msgs.length - 1];

        if (lastMsg.toUser === botName) {
            const newMessageFromBot = {
                chatID: lastMsg.chatID,
                fromUser: botName,
                toUser: lastMsg.fromUser,
                msgText: 'Ожидайте, вам скоро ответят!'
            };
            setTimeout(() => newMessage(newMessageFromBot), 3000)
        }
    }, [msgs])

    return (
        <Container maxWidth="sm">
            <h2>CHAT ID {chatId}</h2>
            <MessageInput onChangeMessage={newMessage} toUser={botName}/>
            {msgs.map(({chatID,fromUser, toUser, msgText}, index) =>
                <Message key={index} chatID={chatId} fromUser={fromUser} toUser={toUser} msgText={msgText}/>)}
        </Container>
    );
}