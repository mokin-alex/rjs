import LoadingButton from '@mui/lab/LoadingButton';
import {useEffect, useState} from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Checkbox} from "@mui/material";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(undefined);

    const getQuery = () => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error")
                }
                return response.json()
            })
            .then(setData)
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getQuery()
    }, [])

    return {loading, error, data, getQuery}
}

export const FetchData = () => {
    const {loading, error, data, getQuery} = useFetch(API_URL);
    if (error) {
        return <div>error</div>
    }
    if (loading) {
        return <div>
            <LoadingButton
                onClick={getQuery}
                loading={loading}
                loadingIndicator="Loading..."
                variant="outlined"
            >
                Fetch data
            </LoadingButton>
        </div>
    }
    if (data) {
        return (
            <div>
                <LoadingButton
                    onClick={getQuery}
                    loading={loading}
                    loadingIndicator="Loading..."
                    variant="outlined"
                >
                    Fetch data
                </LoadingButton>
              {/*  <div>{data.map((obj) => <div key={obj.id}>{obj.title} "---"{obj.completed}</div>)}</div>*/}
                <TodoViewer todos={data}/>
            </div>
        );
    }
}



const TodoViewer = ({todos}) => {

    function handleChange() {
        return true
    }

    return (<div className="chat-list">
            <List sx={{width: '100%', maxWidth: 300, bgcolor: 'background.paper', justifyContent: "center"}}>
                {todos.map(({userId, id, title, completed}) => (
                        <ListItem
                            key={userId}
                        >
                            {userId}-{id} : {title} :
                            <Checkbox
                                checked={completed}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </ListItem>
                    )
                )}
            </List>
        </div>
    )
}

export function ToDo() {
    return (
        <FetchData/>
    )
}