import React from "react";
import { Button } from "ui/buttons";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";
import { MdDashboard } from "react-icons/md";

import { SideBarStyles, SideBarHeader } from "./styles";
import ProductOptions from "./ProductOptions";

function SideBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <SideBarStyles>
            <SideBarHeader>
                <MdDashboard size="1.75rem" />
                <h1>SideBar</h1>
            </SideBarHeader>

            <ProductOptions />

            <div className="content">
                <Button onClick={onLogoutRequest}>Log Out</Button>
            </div>
        </SideBarStyles>
    );
}

export default SideBar;
