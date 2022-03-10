import React from "react";

export default props => {
    
    const renderRows = ()=> {
        const list = props.list || []
        list.maps(todo => (
            <tr>
                <td>{todo.description}</td>
            </tr>
        ))
        return ()
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}