
import Welcome from './Welcome';
import './App.css';

import React, { useState } from 'react';


const Loginfrm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [welcm, setwelcm] = useState(true);


    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const validPassword = new RegExp('^(?=.?[A-Za-z])(?=.?[0-9]).{6}$');

    const validate = (e) => {
        e.preventDefault();

        if (!validEmail.test(email)) {
            setEmailErr(true);
            setwelcm(true);
        }
        else {
            setEmailErr(false);
            setwelcm(false);
        }

        if (!validPassword.test(password)) {
            setPwdError(true);
            setwelcm(true);

        }
        else {
            setPwdError(false);
            alert("login successful!");
            setwelcm(false);
        }

    };


    return (
        <div>
            {welcm ?
                <div className="form">

                    <div className="form-container">

                        <div>
                            <div className="img">
                                {/* <img src={profile} alt="profile" className="profile-img"></img> */}
                                <div className="login-name">
                                    <h2>Login</h2>
                                    <p>Enter your credential to login to your account</p>
                                </div>
                            </div>

                            <div className="input01">
                                {/* <img src={emailPic} alt="email" className="email-icon" /> */}
                                <input type="email" name="email" placeholder="User Name" className="email-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}></input>
                                {emailErr && <p className='error'>Your email is invalid</p>}
                            </div>

                            <div className="input02">
                                <input type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="pass-input"
                                    maxLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}>
                                </input>
                                {pwdError && <p className="error">Your password is invalid!</p>}
                            </div>



                            <div className="button">
                                <button onClick={validate}>Login</button>
                            </div>


                        </div>

                    </div>


                </div>: <Welcome />};
        </div>


    )
}

export default Loginfrm;

// if (!validEmail.test(email)) {
//     setEmailErr(true);
//     setwelcm(true);
// }
// else {
//     setEmailErr(false);
//     setwelcm(false);
// }

// if (!validPassword.test(password)) {
//     setPwdError(true);
//     setwelcm(true);
// }
// else {
//     setPwdError(false);
//     alert("login successful!");
//     setwelcm(false);
// }
// };
//