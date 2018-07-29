import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MenuContainer from './menu/menucontainer';
import ClientInfoTab from  './tabs/clientinfotab';
import AftercreditInfoTab from './tabs/aftercreditinfotab'
import GuaranteeInfoTab from './tabs/guaranteeinfotab'
import ClassNames from 'classnames'
import logo from './logo.svg';
import Wrapper from './Wrapper/Wrapper'
import './App.css';

class App extends Component {
  static childContextTypes={
    openedTab:PropTypes.array,
    activeTab:PropTypes.string,
    _insertTab:PropTypes.func
  }
  constructor(){
    super();
    this.state={
      openedTab:[],
      activeTab:''
    }
  }
  componentWillUpdate(){
    console.log("updage");

  }
  getChildContext(){
    return{
      openedTab:this.state.openedTab,
      activeTab:'',
      _insertTab:this._insertTab.bind(this)
    }
  }
  _insertTab(item){
    console.log("App::this._insertTab--->"+item);
    this.state.openedTab.push(item);
    this.setState({
      openedTab:this.state.openedTab
    });
    console.log(this.state.openedTab);
  }
  _activeTab(item){
    
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <div className="menu">
          <MenuContainer />
        </div>
        <div className="tabcontainer">
          <div className="tabtitle">
              <span>按钮</span>
          </div>
          <div className="tabcontent">
              {this.state.openedTab.map((Tab,i)=>{
                /*return (
                  <div  key={i}>
                    {Tab}
                  </div>
                );*/
                switch(Tab){
                    case "客户信息":
                      console.log(Tab);
                      return <ClientInfoTab key={i}/>
                    case "抵押物信息":
                      console.log(Tab);
                      return <GuaranteeInfoTab key={i}/>
                    case "贷后信息":
                      console.log(Tab);
                      return <AftercreditInfoTab key={i}/>
                    default:
                      console.log(Tab); 
                      return <ClientInfoTab key={i}/>
                }
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
