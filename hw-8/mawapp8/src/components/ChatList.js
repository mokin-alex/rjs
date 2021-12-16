import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import {Avatar, Button, Dialog, DialogTitle, Link, TextField} from "@mui/material";
import {useState} from "react";
import store, {persistor} from "../store";
import {useSelector} from "react-redux";
import chatsSlice from "../store/chatsSlice";

export default function ChatList() {
    let chatsList = useSelector(state => state.chats)
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        store.dispatch(chatsSlice.actions.addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

    const onDelChat = (idd) => {
        store.dispatch(chatsSlice.actions.delChat(idd));
    };

    return (
        <div className="chat-list">
            <List sx={{width: '100%', maxWidth: 200, bgcolor: 'background.paper', justifyContent: "center"}}>
                {chatsList.map(({id, chatUser}) => (
                    <ListItem
                        key={id}
                        disableGutters
                        secondaryAction={
                            <IconButton >
                                <Avatar src="/broken-image.jpg"/>
                            </IconButton>
                        }

                    >
                        <Link href={`/chats/${id}`} underline="hover">
                            <ListItemText primary={`Chat with ${chatUser}`}/>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <span className="chat-add" onClick={handleOpen}>
          Add Chat
        </span>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>A name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange}/>
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>
            </Dialog>

        </div>
    );
}
