import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuContainer from './menu/menucontainer';
import ClientInfoTab from  './tabs/clientinfotab';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static childContextTypes={
    openedTab:PropTypes.array,
    activeTab:PropTypes.string
  }
  constructor(){
    super();
    this.state={
      openedTab:[],
      activeTab:'',

    }
  }
  getChildContext(){
    return{
      openedTab:this.state.openedTab,
      activeTab:'',
      
    }
  }
  _createTab(item){

  }
  _insertTab(item){
    //console.log("App::_inertTab")
    if(item==="clientinfotab"){
      return(
        <ClientInfoTab />
      )
    }
  }
  _activeTab(){
    
  }
  render() {
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
            {this._insertTab(ClientInfoTab)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
