import styles from "../styles/authComponents/Auth.module.scss";

import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";

import { useContext, useEffect, useState } from "react";

import { useLoginUser, useRegisterUser } from "../queries/user";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");

  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  let body = {
    email: email,
    password: pw,
  };

  let regBody = {
    email: regEmail,
    password: regPw,
  };

  const {
    mutate: loginHandler,
    isError: loginError,
    error: loginErr,
  } = useLoginUser();

  const {
    mutateAsync: registerHandler,
    isSuccess: registerSucc,
    isError: registerError,
    error: registerErr,
  } = useRegisterUser();

  useEffect(() => {
    if (auth) navigate("/");
  });

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

          <button
            onClick={() =>
              loginHandler(body, {
                onError: () => {
                  console.log(loginErr);
                },
                onSuccess: () => setAuth(true),
              })
            }
          >
            Login Now
          </button>
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

          <button
            onClick={() =>
              registerHandler(regBody, {
                onSuccess: () => {
                  loginHandler(regBody, {
                    onSuccess: () => setAuth(true),
                    onError: () => {
                      console.log(loginErr);
                    },
                  });
                },
              })
            }
          >
            Register Now
          </button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Auth;
