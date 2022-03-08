import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";
import { Link } from "react-router-dom";

import { AppBar } from "components/appbar";
import SideBar from "components/sidebar/SideBar";
import { DashBoardPageStyles } from "./styles";

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
            navigator("/");
            // login page redirect
        }
    });

    if (isUser) {
        return (
            <>
                <AppBar />
                <DashBoardPageStyles>
                    <SideBar />
                </DashBoardPageStyles>
            </>
        );
    } else {
        return null;
    }
}

export default DashBoardPage;
