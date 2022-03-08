import React, { useState } from "react";
import { Link } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    });

    return (
        <>
            <aside>
                <header>
                    <h1>4040 | Page not found</h1>
                    {isUser ? (
                        <Link to="/dashboard">Back to Safety</Link>
                    ) : (
                        <Link to="/">Back to Safety</Link>
                    )}
                </header>
            </aside>
        </>
    );
}

export default PageNotFound;
