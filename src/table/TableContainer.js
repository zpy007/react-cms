import React,{Component} from 'react'
import TableItem from './tableitem'

export default class TableContainer extends Component{
    render(){
        return(
            <div className="tablecontainer">
                <table>
                    <thead>
                        <tr>
                            {this.props.Columns.map((column,i)=>{
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
                        {console.log(this.props.Data.data)}
                            {
                                this.props.Data.data.map((data,i)=>{
                                console.log("TableContainer"+data);
                                return (
                                    <TableItem Data={data} key={i}/>
                                )
                            })}
                    </tbody>
                </table>
                
                
            </div>
        )
    }
}