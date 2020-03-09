import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/antd/dist/antd.css'
import Top from './components/top/top'
// import {Route,HashRouter,Link,Switch} from 'react-router-dom'
import { Icon } from 'antd'
import Nav from './components/nav/nav'
function App() {
  return (
    <div className="App">
      <Top />
      <Nav />
      <footer>
        <address>Copyright 2018 商丘九创装饰有限公司 All Rights Reserved Redwind design co.,ltd. | 沪ICP备18035177号-3</address>
      </footer>
    </div>
  );
}

export default App;