
// create 2 props as mentioned below

export function Cart(props) {
    //console.log(props.item[0].itemname);
    //arrayname is props.item, not just props alone
    return (
        < table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {(props.item.map(
                    (i) => {
                        return (
                            <tr>
                                <td>{i.itemname}</td>
                                <td>{i.price}</td>
                            </tr>
                        )
                    }))
                }
            </tbody>
        </table >
    )
}
