import { books } from './data';

export const bookdeet = (
    <ul>
        {books.map((books) =>
            <div key = {books.id}>
                <p><b>{ books.bname }</b></p>
                <p>{ books.price }</p>
            </div>
        )}
    </ul>
)