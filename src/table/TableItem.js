import React, { Component } from 'react'

export default class TableItem extends Component {
    render() {
        var columns = this.props.Columns;
        var dataes = this.props.Data;
        var tds=(dataes)=>{
            return (
                <td>
                    {dataes.clientname}
                </td>
            );
        }
        return (
            
            <tr className="tableitem">
                {console.log(tds)} 
                
            </tr>
        )
    }
}