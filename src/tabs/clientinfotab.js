import React,{Component} from 'react'
import TableContainer from '../table/tablecontainer';

var mockjson2={
    "status": 200,
    "message": "aftercreditinfotab",
    "data": [
        {
            "clientname": "张飞",
            "clientid": "150424198707110054",
            "clientaddress": "万达A区",
            "clientamount": "1000000",
            "clientlimit": 1,
            "clientusage": "做生意"
        }, {
            "clientname": "赵云",
            "clientid": "150424196309240049",
            "clientaddress": "万达C区",
            "clientamount":"200000",
            "clientlimit": "3",
            "clientusage": "周转资金"
        }
    ]
}


export default class ClientInfoTab extends Component{
    render(){
        return (
            <div>
                <span>客户信息选项卡</span>
                <div>
                    <div><span>【搜索框】搜索按钮</span></div>
                    <div><span>数据表[姓名|身份证号|地址|电话|授信额度|期限|用途]</span></div>
                    <div><span>分页</span></div>
                </div>
                <div className="table">
                    <TableContainer Columns={[
                        { field: "clientname", title: "姓名" },
                        { field: "clientid", title: "身份证号" },
                        { field: "clientaddress", title: "地址" },
                        { field: "clientamount", title: "授信额度" },
                        { field: "clientlimit", title: "期限" },
                        { field: "clientusage", title: "用途" }
                        ]} 
                        Data={mockjson2}/>
                </div>
            </div>
        )
    }
}