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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    MAW ReactJS home work 6
                </p>
            </header>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ChatList/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="/chats/:chatId" element={<ChatView/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
