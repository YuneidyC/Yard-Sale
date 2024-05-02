import React from "react";

import Header from "Components/Header";

import "Styles/signUp.css";

const SignUp = () => {

    return (
        <>
            <Header />
            <div className="signup-container">
                <h1>Create account</h1>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder={"Your name"} id="user-info" />
                    <label>Email address</label>
                    <input type="text" placeholder={"email@gmail.com"} id="user-info" />
                    <label>Password</label>
                    <input type="password" placeholder={"********"} id="user-info" />
                    <button className="signup-button">
                        Create
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignUp;