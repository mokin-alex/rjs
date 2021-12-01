import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";
import NoMatch from "./components/NoMatch";
import ChatList from "./components/ChatList";
import ChatView from "./components/ChatView";
import Layout from "./components/Layout";
import {Provider} from "react-redux";
import store from "./store";

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
                    MAW ReactJS home work 5
                </p>
            </header>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ChatList chatItemList={chatItemList}/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="/chats/:id" element={<ChatView/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
