import React from "react";

import {
    IoNotificationsOutline,
    IoMailOutline,
    IoEllipsisVertical,
} from "react-icons/io5";

import {
    AppBarStyles,
    AppBarItem,
    AppBarItems,
    AppBarItemGroup,
} from "./styles";
import { IconButton } from "./../../ui/buttons";
function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Branding</AppBarItem>
                <AppBarItemGroup>
                    <IconButton>
                        <IoMailOutline size="1.5rem" color="grey" />
                    </IconButton>

                    <IconButton>
                        <IoNotificationsOutline color="tomato" size="1.75rem" />
                    </IconButton>

                    <IconButton>
                        <img src="https://avatars.dicebear.com/api/initials/JC.svg?r=50&size=30" />
                    </IconButton>

                    <IconButton>
                        <IoEllipsisVertical size="1.25rem" color="grey" />
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
