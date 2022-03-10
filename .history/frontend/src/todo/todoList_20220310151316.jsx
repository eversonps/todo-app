import React from "react";
import If from "../template/If";

export default props => {
    const renderRows = ()=> {
        <tr><td>ok</td></tr>
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