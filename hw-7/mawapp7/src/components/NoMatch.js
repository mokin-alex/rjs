import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <>
            <main>
                <h2>No match</h2>
            </main>
            <nav>
                <Link to="/profile">Profile</Link>
            </nav>
        </>
    );
}