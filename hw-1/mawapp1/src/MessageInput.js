import {useState} from "react";

const MessageInput = props => {

    const [msgText, setMsgText] = useState('');
    const [fromUser, setFromUser] = useState('');
    const [toUser, setToUser] = useState(props.toUser);

    return (
        <div className={'App-form'}>
            <input type="text" autoFocus className={'App-input App-input_name'} placeholder="Name"
                   value={fromUser}
                   onChange={event => setFromUser(event.target.value)}
            />
            <input type="text" className={'App-input'} placeholder="Text"
                   value={msgText}
                   onChange={event => setMsgText(event.target.value)}
            />
            <button className={'App-button'}
                    onClick={() => {
                        props.onChangeMessage({ fromUser: fromUser, toUser: toUser, msgText: msgText })
                    }}
            >Send</button>
        </div>
    );
}

export default MessageInput;