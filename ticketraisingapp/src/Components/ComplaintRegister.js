import { useState } from 'react';

export function ComplaintRegister() {
    const [name, setName] = useState("");
    const [transId, setTransId] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTransId(transId + 1);
        alert(`Thanks ${name} \nYour complaint was submitted.\nTransaction ID is: ${transId}`);
    }


    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label>Name:</label></td>
                    <td><input type="text" onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Complaint:</label></td>
                    <td><textarea type="text" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" /></td>
                </tr>
            </table>
        </form>
    )
}