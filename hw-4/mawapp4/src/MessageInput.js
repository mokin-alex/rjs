import {useState} from "react";
import {Button, FormControl, InputLabel, OutlinedInput} from "@mui/material";

const MessageInput = props => {

    const [msgText, setMsgText] = useState('');
    const [fromUser, setFromUser] = useState('');
    const [toUser, setToUser] = useState(props.toUser);

    return (
        <div className={'App-form'}>
            <FormControl>
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={fromUser}
                    onChange={event => setFromUser(event.target.value)}
                    label="Name"
                    margin="normal"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-outlined">Message</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    value={msgText}
                    onChange={event => setMsgText(event.target.value)}
                    label="Message"
                    margin="normal"
                />
            </FormControl>
            <FormControl>
                <Button variant="contained"
                        onClick={() => {
                            props.onChangeMessage({fromUser: fromUser, toUser: toUser, msgText: msgText})
                        }}
                >Send</Button>
            </FormControl>
        </div>
    );
}

export default MessageInput;