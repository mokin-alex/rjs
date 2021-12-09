import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import {Avatar, Link} from "@mui/material";

export default function ChatList({chatItemList}) {
    return (
        <div className="chat-list">
        <List sx={{width: '100%', maxWidth: 200, bgcolor: 'background.paper', justifyContent:"center"}}>
            {chatItemList.map(({id, chatUser}) => (
                <ListItem
                    key={id}
                    disableGutters
                    secondaryAction={
                        <IconButton>
                            <Avatar src="/broken-image.jpg" />
                        </IconButton>
                    }
                >
                    <Link href={`/chats/${id}`} underline="hover">
                        <ListItemText primary={`Chat with ${chatUser}`}/>
                    </Link>
                </ListItem>
            ))}
        </List>
        </div>
    );
}