import React from "react";
import { Button } from "ui/buttons";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

import { SideBarStyles } from "./styles";

function SideBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <SideBarStyles>
            <header>
                <h1>SideBar</h1>
            </header>

            <div className="content">
                <Button onClick={onLogoutRequest}>Log Out</Button>
            </div>
        </SideBarStyles>
    );
}

export default SideBar;
