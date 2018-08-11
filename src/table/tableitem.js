import React, { Component } from 'react'
import './tablestyle.css'

export default class TableItem extends Component {
    render() {
        var columns = this.props.Columns;
        var data = this.props.Data;
        return (
            
            <tr className="tableitem">
                {columns.map((column,i)=>{
                    return(
                        <td key={i}>
                            {data[column.field]}
                        </td>
                    )
                })}
            </tr>
        )
    }
}