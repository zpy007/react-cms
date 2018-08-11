import React,{Component} from 'react'
import './tabstyle.css'

export default class SearchComponent extends Component{
    render(){
        return(
            <div className="search-component">
                <div className="search-input">
                    <input type="text"/>
                </div>
                <div className="search-button">
                    <button>搜索</button>
                </div>
            </div>
        )
    }
}