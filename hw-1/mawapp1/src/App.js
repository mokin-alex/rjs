import logo from './logo.svg';
import './App.css';
import Message from './Message';
import {useState} from "react";

function App() {

    const [messages] = useState([
        {fromUser: 'Ustas', toUser: 'Alex', msgText: 'Юстас Алексу шлёт привет!'},
        {fromUser: 'Alex', toUser: 'Ustas', msgText: 'Алекс Юстасу шлёт ответ!'},
        {fromUser: 'Ustas', toUser: 'Alex', msgText: 'Юстас Алексу принял.'}
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    MAW React JS <code>home work #1 </code>
                </p>
            </header>
            {messages.map(({fromUser, toUser, msgText}, index) =>
                <Message key={index} fromUser={fromUser}  toUser={toUser} msgText={msgText}/>)}
        </div>
    );
}

export default App;
