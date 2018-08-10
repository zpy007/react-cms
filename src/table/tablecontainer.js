import React,{Component} from 'react'
import TableItem from './tableitem' 

export default class TableContainer extends Component{
    render(){
        var columns = this.props.Columns;
        var dataes = this.props.Data.data;
        return(
            <div className="tablecontainer">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column,i)=>{
                                return (
                                    <th key={i}>
                                        {column.title/*设置表头*/}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("TableContainer:")}
                        {console.log(dataes)}
                            {
                                dataes.map((data,i)=>{
                                console.log("TableContainer"+data);
                                return (
                                    <TableItem Columns={columns} Data={data} key={i}/>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}