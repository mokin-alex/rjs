import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {Button, Input, Link} from "@mui/material";
import {auth} from "../services/firebase";

export const SignIn = () => {
    const [email, setEmail] = useState((auth.currentUser) ? auth.currentUser.email : "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState((auth.currentUser) ? auth.currentUser.uid : "");
    const [disabled, setDisabled] = useState((auth.currentUser) ? false : true);


    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setPassword("");
                setUser(auth.currentUser.uid)
                setDisabled(false);

            })
            .catch((error) => {
               // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });

    };

    function handleLogout() {
        auth.signOut().then(() => {
            // Sign-out successful.
            setDisabled(true);
            setEmail("");
            setPassword("");

        }).catch((error) => {
            // An error happened.
            setError(error.message);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
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
                    <Button type="submit" disabled={!disabled}>Login</Button>
                </div>
                <div> {!disabled && <p>{user}</p>}
                    <Button onClick={handleLogout} variant="outlined" disabled={disabled}>Logout</Button>

                </div>

                <hr/>
                <p>
                    Don't have an account? <Link href='/signup'>Sign up</Link>
                </p>
            </form>
        </div>
    );
};
