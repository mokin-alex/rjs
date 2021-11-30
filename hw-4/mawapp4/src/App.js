import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import NoMatch from "./NoMatch";
import ChatList from "./ChatList";
import ChatView from "./ChatView";
import Layout from "./Layout";

const chatItemList = [
    {id: '333', chatUser: 'Alex'},
    {id: '444', chatUser: 'Ivan'},
    {id: '555', chatUser: 'Pavel'},
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    MAW ReactJS home work 4
                </p>
            </header>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ChatList chatItemList={chatItemList}/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="/chats/:id" element={<ChatView/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
