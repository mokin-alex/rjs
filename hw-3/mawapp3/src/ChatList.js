import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

export default function ChatList({chatItemList}) {
    return (
        <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
            {chatItemList.map(({id, chatUser}) => (
                <ListItem
                    key={id}
                    //disableGutters
                    secondaryAction={
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={`Chat with ${chatUser}`} />
                </ListItem>
            ))}
        </List>
    );
}