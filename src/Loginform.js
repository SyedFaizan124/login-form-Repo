import React, { useState } from "react";
import './App.css';
import Welcome from "./Welcome";

const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState('false');
    const [pwdErr, setPwdError] = useState('false');
    const [wlcm, setwlcm] = useState('true');

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const validate = (e) => {
        e.preventDefault();

        if (!validEmail.test(email)) {
            setEmailErr(true);
            setwlcm(true);
        }
        else {
            setEmailErr(false);
            setwlcm(false);

        }

        if (!validPassword.test(password)) {
            setPwdError(true);
            setwlcm(true);

        }
        else {
            setPwdError(false);
            setwlcm(false);
            alert("login Successful...");
        }
    };

    return (
        <div>
            {wlcm ?

                <div className="form">

                    <div className="form-container">

                        <div className="login-name">
                            <h2>Login</h2>
                            <h4>Enter your credential to login to your account</h4>
                        </div>

                        <div className="input01">
                            <input type="email"
                                name="eml"
                                placeholder=" Enter User Name"
                                className="pass-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            {emailErr && <p className="error">Your password is invalid!</p>}
                        </div>

                        <div className="input02">
                            <input type="password"
                                name="passwrd"
                                placeholder=" Enter your Password"
                                className="pass-input"
                                maxLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                            {pwdErr && <p className="error">Your password is invalid!</p>}
                        </div>

                        <div className="button">
                            <button onClick={validate}>Login</button>
                        </div>
                    </div>

                </div> : <Welcome />}
        </div>


    );
}

export default Loginform;