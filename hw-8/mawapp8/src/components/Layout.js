import {Link, Outlet} from "react-router-dom";

export default function Layout() {

    return (
        <div>
            <nav>
                <h2>CHAT</h2>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="todo">APIToDo</Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            <Outlet/>
        </div>
    );
}