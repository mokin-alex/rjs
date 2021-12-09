import {Link} from "react-router-dom";
import {Avatar} from "@mui/material";

export default function Profile() {
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
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}