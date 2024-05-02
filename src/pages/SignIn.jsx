import React from "react";

import Header from "Components/Header";
import "Styles/signin.css";

const SignIn = () => {

    return (
        <>
            <Header />
            <div className="signin-container">
                <div className="signin-email-password">
                    <form>
                        <label>Email address</label>
                        <input type="text" placeholder={"email@gmail.com"} id="user-info" />
                        <label>Password</label>
                        <input type="password" placeholder={"********"} id="user-info" />
                        <button className="signin-buttons signin-button">
                            Sign in
                        </button>
                        <p>Forgot my password</p>
                        <button className="signin-buttons signup-button">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;