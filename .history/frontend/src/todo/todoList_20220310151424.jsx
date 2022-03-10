import React from "react";

export default props => {
    const list = props.list || []
    const renderRows = ()=> {
        return (<tr><td>ok</td></tr>)
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