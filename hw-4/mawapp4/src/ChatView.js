import {useEffect, useState} from "react";
import {Container} from "@mui/material";
import MessageInput from "./MessageInput";
import Message from "./Message";
import {useParams} from "react-router-dom";
import {botName, filterByChatID} from "./MessagesData";

export default function ChatView() {
    const  {id}  = useParams();
    let filtered = filterByChatID(id);

    //пока заглушка для несуществующих ID
    if (filtered.length===0) { filtered = [{chatID:id, fromUser: '', toUser: '', msgText: ''},]}

    const [messages, setMessages] = useState(filtered);

    const newMessage = (input) => {
        setMessages(messages => {
            return [...messages, input]
        })
    }

    useEffect(() => {
        const lastMsg = messages[messages.length - 1];

        if (lastMsg.toUser === botName) {
            setTimeout(() => setMessages(messages => {
                return [...messages, {
                    chatID: lastMsg.chatID,
                    fromUser: botName,
                    toUser: lastMsg.fromUser,
                    msgText: 'Ожидайте, вам скоро ответят!'
                }]
            }), 3000)
        }
    }, [messages])

    return (
        <Container maxWidth="sm">
            <h2>CHAT ID {id}</h2>
            <MessageInput onChangeMessage={newMessage} toUser={botName}/>
            {messages.map(({chatID,fromUser, toUser, msgText}, index) =>
                <Message key={index} chatID={id} fromUser={fromUser} toUser={toUser} msgText={msgText}/>)}
        </Container>
    );
}