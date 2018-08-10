import React,{Component} from 'react'
import TableItem from './tableitem'

export default class TableContainer extends Component{
    render(){
        return(
            <div className="tablecontainer">
                <table>
                    <thead>
                        <tr>
                            {this.props.Columns.map((column)=>{
                                return (
                                    <th>
                                        {column.title/*设置表头*/}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                        <tr>
                        </tr>
                    <tbody>
                        <tr>
                            <TableItem />
                        </tr>
                        <tr>
                            <TableItem />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}