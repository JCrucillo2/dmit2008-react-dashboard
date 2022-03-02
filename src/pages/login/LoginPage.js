import React, { useState } from "react";
import styled from "styled-components";

import { Label } from "../../ui/forms";
import { Input } from "../../ui/forms";
import { SubmitButton } from "../../ui/buttons";

const LoginPageStyles = styled.section`
    max-width: 400px;
    margin: 2rem auto;
    header {
        margin-bottom: 2rem;
    }
    h1 {
        font-size: 2rem;
    }
`;

const FormControl = styled.div`
    margin-bottom: 1.5rem;
`;

function LoginPage(props) {
    console.log("component render");
    //  js code....
    // useState() return stateful value, function to change the sateful value
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onHandleSignIn(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // send the email and password to firebase to authenticate
        // or show an error
    }

    return (
        <LoginPageStyles>
            <header>
                <h1>Welcome Please Login In</h1>
            </header>
            <form onSubmit={onHandleSignIn}>
                <FormControl>
                    <Label>Email</Label>
                    <Input
                        type="text"
                        placeholder="janedoe@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <Label>Password</Label>
                    <Input
                        type="text"
                        placeholder="account password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <SubmitButton padding="0.85rem 0" margin="1rem 0 0 0">
                        Sign Into The Dashboard
                    </SubmitButton>
                </FormControl>
            </form>
        </LoginPageStyles>
    );
}

export default LoginPage;
