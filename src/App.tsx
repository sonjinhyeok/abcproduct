import React, {Component} from 'react';
import './App.css';

function App() {
  
  return (
    <body>
      <div className="header">
        <h1>ABCProduct</h1>
      </div>
      {/* Side menu */}
        <div className="sidenav">
          <ul className="sidenav_bar">
            <li className="sidenav_bar_menu">ホーム</li>
            <li className="sidenav_bar_menu">在庫管理</li>
            <li className="sidenav_bar_menu">受注管理</li>
          </ul>
        </div>
      {/* Main */}
        <div className="main_content">
          <div className="main_content_item">在庫管理へ</div>
          <div className="main_content_item">在庫管理へ</div>
            <div className="sub_content">
              <div className="sub_content_item">コンテンツ1</div>
              <div className="sub_content_item">コンテンツ2</div>  
            </div>
        </div>
    </body>
  );
  
}
export default App;

