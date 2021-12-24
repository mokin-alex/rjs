import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import {Avatar, Button, Dialog, DialogTitle, Link, TextField} from "@mui/material";
import {useState} from "react";
//import store, {persistor} from "../store";
import {useSelector} from "react-redux";
//import chatsSlice from "../store/chatsSlice";
import {db} from "../services/firebase";
import {ref, push, set, query, onValue, child, remove} from "firebase/database";

export default function ChatList() {
    //let chatsList = useSelector(state => state.chats)
    let dbChatsList = [];
    const chatListRef = ref(db, 'chats/');
    const newChatRef = push(chatListRef);
    onValue(chatListRef, (snapshot) => {

        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val().chatUser;
            dbChatsList.push({id: childKey, chatUser: childData});
        });
    }, {
        onlyOnce: true
    });
    //console.log(dbChatsList);
    //console.log(chatsList);

    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    //----------
    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        //store.dispatch(chatsSlice.actions.addChat(newChatName));

        //firebase:
        set(newChatRef, {
            chatUser: newChatName
        })
            .then(() => {
            })
            .catch((error) => {
                console.log(error)
            });

        setNewChatName("");
        handleClose();
    };

    const onDelChat = (idd) => {
        //store.dispatch(chatsSlice.actions.delChat(idd));
        //chatListRef.child(idd).remove();
/*        if (idd===null) {idd=dbChatsList.length}
        remove(ref(db, 'chats' + idd.toString())).then(() => {
        }).catch((error) => {
            console.log(error)
        })*/
        //remove(child(ref(db), 'chats/' + idd)).then(() =>{} )
        //console.log(child(ref(db), 'chats/' + idd))
    };

    return (
        <div className="chat-list">
            <List sx={{width: '100%', maxWidth: 200, bgcolor: 'background.paper', justifyContent: "center"}}>
                { dbChatsList.map(({id, chatUser}) => (
                    <ListItem
                        key={id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <Avatar src="/broken-image.jpg"/>
                            </IconButton>
                        }
                    >
                        <Button className="chat-add" onClick={onDelChat({id})}>Del</Button>
                        <Link href={`/chats/${id}`} underline="hover">
                            <ListItemText primary={`Chat with ${chatUser}`}/>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Button variant="outlined" className="chat-add" onClick={handleOpen}>Add Chat</Button>
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
