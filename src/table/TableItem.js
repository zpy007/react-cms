import React, { Component } from 'react'

export default class TableItem extends Component {
    render() {
        var columns = this.props.Columns;
        var data = this.props.Data;
        return (
            
            <tr className="tableitem">
                {columns.map((column)=>{
                    return(
                        <td>
                            {data[column.field]}
                        </td>
                    )
                })}
            </tr>
        )
    }
}