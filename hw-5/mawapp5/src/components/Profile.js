import {Link} from "react-router-dom";
import {Avatar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {toggleShowNameAction} from "../store/profile/actions";

export default function Profile() {
    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowNameAction);
    }, [dispatch]);

    return (
        <>
            <main>
                <h3>PROFILE</h3>
                <div className="profile">
                    <Avatar src="/broken-image.jpg"/>
                    <p>
                        Information about you...
                    </p>
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
                <p>-----------------</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}