import React,{Component} from 'react'
import SearchComponent from './searchcomponent'
import './tabstyle.css'

var mockjson1={
    "status": 200,
    "message": "aftercreditinfotab",
    "data": [
        {
            "clientname": "张飞",
            "ID": "150424198707110054",
            "address": "万达A区",
            "telephone": "13947607658",
            "total": 500000,
            "limit": 1,
            "use": "做生意",
            "aftercredit": [
                {
                    "title": "首次贷后",
                    "date": "2018-2-20"
                },
                {
                    "title": "第一次贷后",
                    "date": "2018-08-20"
                }]
        }, {
            "clientname": "赵云",
            "ID": "150424196309240049",
            "address": "万达C区",
            "telephone": "13947607658",
            "total": 100000,
            "limit": 1,
            "use": "购车",
            "aftercredit": [
                {
                    "title": "首次贷后",
                    "date": "2018-3-6"
                },
                {
                    "title": "第一次贷后",
                    "date": "2018-09-17"
                }]
        }
    ]
}

export default class AftercreditInfoTab extends Component{
    render(){
        return (
            <div>
                <span>贷后信息选项卡</span>
                <div>
                    <SearchComponent/>
                    <div><span>数据表[姓名|身份证号|地址|电话|授信额度|期限|用途]</span></div>
                    <div><span>|___[首次贷后|日期[日期格式]](如已经检查，条目显示绿色)</span></div>
                    <div><span>|___[第一次贷后|日期[日期格式]](如已经检查，条目显示绿色)</span></div>
                    <div><span>|___[第二次贷后|日期[日期格式]](如已经检查，条目显示绿色)</span></div>
                    <div><span>|___[第三次贷后|日期[日期格式]](如已经检查，条目显示绿色)</span></div>
                    <div><span>|___[第四次贷后|日期[日期格式]](如已经检查，条目显示绿色)</span></div>
                    <div><span>|___[第五次贷后|日期[日期格式]](如未经检查，条目显示红色)</span></div>
                    <div><span>分页</span></div>
                </div>
            </div>
        )
    }
}