import { useState } from 'react';

export default function CurrencyConverter() {
    return (
        <div className="currencyConverter">
            <h1>Currency Converter!!!</h1>
            <div className="label">
                <h3>Testing labels:</h3>
                <label>
                    Amount: <input name="amountTest" />
                </label><br />
                <label>
                    Currency: <textarea name="currencyTest"></textarea>
                </label>
            </div>
            <hr />

            <div className="tables">
                <h3>Testing tables:</h3>
                <MyForm />
            </div>
        </div>
    )
}

function MyForm() {
    const [amt, setAmt] = useState('0');

    const handleSubmit = (e) => {
        // prevent automatic page reload
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // work with formData as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.amount);

        setAmt(convertEuroToRupee(formJson.amount));
        // to handle state change, use onChange within input instead
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Amount:</td>
                            <td>
                                <input type="text" name="amount">
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td>Currency:</td><td><textarea name="currency"></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" name="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {amt}
        </div>
    )
}

function convertEuroToRupee(euros) {
    // current conversion rate
    const rupees = (euros * 90.48);
    return (rupees.toFixed(2));
}