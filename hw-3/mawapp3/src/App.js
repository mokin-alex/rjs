import logo from './logo.svg';
import './App.css';
import Message from './Message';
import {useEffect, useState} from "react";
import MessageInput from "./MessageInput";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import ChatList from "./ChatList";

const botName = 'Ustas';

const initMessages = [
    {fromUser: 'Alex', toUser: botName, msgText: 'Алекс Юстасу шлёт привет!'},
    {fromUser: botName, toUser: 'Alex', msgText: 'Юстас Алексу шлёт ответ!'},
];

const chatItemList = [
    {id: new Date().getMilliseconds(), chatUser: 'Andrey'},
    {id: new Date().getMilliseconds() + 1, chatUser: 'Petr'},
];

const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

function App() {

    const [messages, setMessages] = useState(initMessages);

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
                    fromUser: botName,
                    toUser: lastMsg.fromUser,
                    msgText: 'Ожидайте, вам скоро ответят!'
                }]
            }), 3000)
        }
    }, [messages])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        MAW React JS <code>home work #3 </code>
                    </p>
                </header>
                <Container className="App-wrap">
                    <Container maxWidth="sm">
                        <ChatList chatItemList={chatItemList}/>
                    </Container>
                    <Container maxWidth="sm">
                        <MessageInput onChangeMessage={newMessage} toUser={botName}/>
                        {messages.map(({fromUser, toUser, msgText}, index) =>
                            <Message key={index} fromUser={fromUser} toUser={toUser} msgText={msgText}/>)}
                    </Container>
                </Container>
            </ThemeProvider>
        </div>
    )
        ;
}

export default App;
