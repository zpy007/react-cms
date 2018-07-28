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
      com:<ClientInfoTab/>
    }
  }
  getChildContext(){
    return{
      openedTab:this.state.openedTab,
      activeTab:''
    }
  }
  _insertTab(){
    return(
        <ClientInfoTab />
      )
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
            {this.state.com}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
