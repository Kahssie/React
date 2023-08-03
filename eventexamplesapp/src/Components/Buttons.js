import { useState } from 'react';

export function Buttons() {
    const message = "Member";
    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        alert('Hello ' + message + '!');
        setCounter(counter + 1);
    }

    function handleDecrement() {
        setCounter(counter - 1);
    }

    function handleWelcome(welcomeMessage) {
        alert(welcomeMessage);
    }

    function handleSyntheticMessage(clickedMessage) {
        alert(clickedMessage);
    }

    return (
        <div className="buttons">
            {counter} < br />
            <Button onClick={handleIncrement}>Increment</Button><br />
            <Button onClick={handleDecrement}>Decrement</Button><br />

            <Button onClick={(e) => handleWelcome("welcome")}>Say welcome</Button><br />

            <SyntheticButton onPress={(e) => handleSyntheticMessage("I was clicked")} >Click on me</SyntheticButton><br />
        </div>
    )
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function SyntheticButton({ onPress, children }) {
    return (
        <button onClick={onPress}>
            {children}
        </button>
    )
}