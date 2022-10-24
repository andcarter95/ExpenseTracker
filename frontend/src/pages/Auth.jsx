import styles from "../styles/authComponents/Auth.module.scss"

import MainContainer from "../components/Containers/MainContainer"
import { Title } from "../components/Titles/Titles"

import { useEffect, useState } from "react";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const [regEmail, setRegEmail] = useState("");
    const [regPw, setRegPw] = useState("");

    return (
        <MainContainer>
            <form action="submit" onSubmit={(e) => e.preventDefault()}>
                <div className={styles.container}>
                    <Title>Login</Title>
                    <span>Email :</span>
                    <input
                        type="email"
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <span>Password :</span>
                    <input
                        type="password"
                        onChange={(e) => setPw(e.target.value)}
                        value={pw}
                        autoComplete="password"
                    />

                    <button>Login Now</button>
                </div>
            </form>
                <form 
                    action="submit" 
                    onSubmit={(e) => e.preventDefault()}
                    className={styles.registerForm}
                >
                    <div className={styles.container}>
                    <Title>Register</Title>
                    <span>Email :</span>
                    <input
                        type="email"
                        onChange={(e) => setRegEmail(e.target.value)}
                        value={regEmail}
                        autoComplete="email"
                    />
                    <span>Password :</span>
                    <input
                        type="password"
                        onChange={(e) => setRegPw(e.target.value)}
                        value={regPw}
                        autoComplete="new-password"
                    />

                    <button>Register Now</button>
                    </div>
                </form>
            
        </MainContainer>
    )
};

export default Auth;