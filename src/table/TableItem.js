import React, { Component } from 'react'

export default class TableItem extends Component {
    render() {
        return (
            <tr className="tableitem">
                <td>
                    {this.props.Data.clientname}
                </td>
                <td>
                    {this.props.Data.clientid}
                </td>
            </tr>
        )
    }
}