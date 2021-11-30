import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <>
            <main>
                <h2>Тут ничего нет</h2>
            </main>
            <nav>
                <Link to="/profile">Профиль</Link>
            </nav>
        </>
    );
}