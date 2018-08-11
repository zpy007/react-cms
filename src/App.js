import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuContainer from './menu/menucontainer';
import './App.css';

class App extends Component {
  static childContextTypes = {
    openedTab: PropTypes.array,
    activeTab: PropTypes.string,
    _insertTab: PropTypes.func,
    _activeTab: PropTypes.func
  }
  constructor() {
    super();
    this.state = {
      openedTab: [],
      activeTab: '',
      styles: {
        tabcontent: {
          display: 'none'
        },
        displaytabitem: {
          display: 'none'
        }
      }
    }
  }
  componentWillUpdate() {
    console.log("update");

  }
  getChildContext() {
    return {
      openedTab: this.state.openedTab,
      activeTab: '',
      _insertTab: this._insertTab.bind(this),
      _activeTab: this._activeTab.bind(this)
    }
  }

  _insertTab(item) {
    console.log("App::this._insertTab--->" + item.title);
    this.state.openedTab.push(item);
    this.setState({
      openedTab: this.state.openedTab
    });
    console.log(this.state.openedTab);

  }
  watch() {
    console.log("App::watch:this.state.activeTab: " + this.state.activeTab);
  }
  handleChangeTab(item) {
    console.log("App::handleChangeTab " + item.title + "--|");
    console.log(this.state.styles.tabcontent)
    this.setState({
      styles: {
        tabcontent: {
          display: 'none'
        }
      }
    })

  }

  _activeTab(item) {
    console.log("App::_activeTab " + item.title);
    this.handleChangeTab(item);
    this.setState(() => {
      return {
        activeTab: item.title
      }
    });
  }
  render() {
    return (

      //style={this.state.styles.tabcontent}
      //style={item.title===this.state.activeTab?this.state.styles.displaytabitem:{}}
      //id={item.title} ref={(div)=>{this.mydiv=div}}
      /*.tabcontent {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
      }*/
      <div className="App">
        <div className="layout-title">
        </div>
        <div className="layout-content">
          <div className="layout-menucontainer">
            <MenuContainer />
          </div>
          <div className="layout-tabcontainer">
            <div className="tabtitle" >
              <span>按钮</span>
            </div>
            <div className="tabcontent">
              {this.state.openedTab.map((item, i) => {
                console.log("this.item.title: " + item.title);
                console.log("this.state.activeTab: " + item.title);
                return (
                  <div key={i} style={item.title === this.state.activeTab ? {} : this.state.styles.tabcontent}>
                    {item.target}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
