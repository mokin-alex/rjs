import {firebaseApp} from "../services/firebase";
import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {Button, Input, Link} from "@mui/material";
const auth = getAuth(firebaseApp);

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                    <Input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <Button type="submit">Register</Button>
                </div>
                <hr/>
                <p>
                    Already have an account? <Link href="/signin">Sign in</Link>
                </p>
            </form>
        </div>
    );
}


