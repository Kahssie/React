import { useState } from 'react';

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    // complete validations in handleSubmit
    const handleSubmit = (event) => {
        let hasError = false;
        const alertMsg = [];

        event.preventDefault();

        if (name.length < 5) {
            alertMsg.push("Full name must be at least 5 characters long!")
            hasError = true;
        }
        if (!validEmailRegex.test(email)) {
            alertMsg.push("Invalid email address!")
            hasError = true;
        }
        if (password.length < 8) {
            alertMsg.push("Password must be at least 8 characters long!")
            hasError = true;
        }

        if (!hasError) {
            alertMsg.push("Form validation success!")
        }

        alert(alertMsg.join("\n"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="name" onChange={e => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" onChange={e => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" name="password" onChange={e => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" name="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}