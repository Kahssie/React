import { Greeting } from "./Greetings";
import { useState } from 'react';

function LogoutButton(onClick) {
    return (
        <div className="logoutbutton">
            <button onClick={onClick.onClick}>
                Logout
            </button>
        </div>
    )
}

function LoginButton(onClick) {
    return (
        <div className="loginbutton">
            <button onClick={onClick.onClick}>
                Login
            </button>
        </div>
    )
}

export function ButtonController() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    function handleButtonClick() {
        setisLoggedIn(!isLoggedIn);
    }

    let button = isLoggedIn ? <LogoutButton onClick={handleButtonClick} /> : <LoginButton onClick={handleButtonClick} />;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}


