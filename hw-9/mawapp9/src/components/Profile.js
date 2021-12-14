import {Link} from "react-router-dom";
import {Avatar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {toggleShowNameAction} from "../store/profile/actions";
import {auth} from "../services/firebase";


export default function Profile() {
    const {showName, name} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch(toggleShowNameAction);
    }, [dispatch]);
    const [user, setUser] = useState((auth.currentUser) ? auth.currentUser.uid : "");
    const [email, setEmail] = useState((auth.currentUser) ? auth.currentUser.email : "");

    return (
        <>
            <main>
                <h3>PROFILE</h3>
                <div className="profile">
                    <Avatar src="/broken-image.jpg"/>
                    <p>
                        Information about you...
                    </p>
                    {email && <p>{email}</p>}
                    {user && <p>{user}</p>}
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showName}
                        value={showName}
                        onChange={setShowName}
                    />
                    <span>Show Name</span>
                    {showName && <p><strong>{name}</strong></p>}
                </div>
                <p>----------------</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}