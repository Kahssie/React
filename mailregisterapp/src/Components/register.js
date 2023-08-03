import { useState } from 'react';

export function Register() {
    const [inputs, setInputs] = useState({});
    const [errorMsg, setError] = useState("");
    const [hasError, setHasError] = useState(false);

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    // complete validations in handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        switch (event.target.name) {
            case 'name':
                console.log("name trigger")
                if (this.value.length < 5) {
                    setError("Full Name must be at least 5 characters long!")
                }
                break;
            case 'email':
                if (validEmailRegex.test(event.target.value)) {
                    setError(errorMsg + "\nEmail is not valid!")
                }
                break;
            case 'password':
                if (event.target.value.length < 8) {
                    setError(errorMsg + "\nPassword must be at least 8 characters long!")
                }
                break;
            default:
                break;
        }

        alert(errorMsg);
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" name="email" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" name="password" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}