import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example'
import Topbar from './TopBar'
import InfoCard from './InfoCard'


function App() {
    return (
        <div className="app">

            <div id='TopBar'>
                <Topbar />
            </div>
            <div className='main-contents'>
                <div className='profile-contents'>
                    <h2>Profile</h2>
                    <div id='Example' className="container">
                        <Example img ='image/self.jpg' imgInfo='NAIST 大学院 修士１年'/>
                    </div>
                    <h2>Portfolio / Skills</h2>
                    <div>
                        <InfoCard icon="image/unity-tab-square-black.png" 
                            title="ゲーム制作" v1="チーム開発:２名" v2="Photonによるマルチオンラインゲーム"
                            link="https://github.com/naoya0930/BoxStackBox" linkName="リンク(Github)"/>
                    </div>
                    <div>
                    <InfoCard icon="image/unity-tab-square-black.png" 
                            title="ARゲーム製作" v1="個人開発(2weeksインターン)" v2="Unity-ARCoreライブラリを使用"
                            link="https://github.com/naoya0930/RollBallinAR-" linkName="リンク(Github)"/>
                    </div>
                    <div>
                        <InfoCard icon="image/Android_Robot.png" 
                            title="Androidアプリ製作" v1="個人開発(1month)" v2="AndroidStudio(Java)を使用"
                            link="https://github.com/naoya0930/ColorLessLens" linkName="リンク(Github)"/>
                    </div>
                    <div>
                        <InfoCard icon="image/laravel-mark-rgb-red.png" 
                            title="ホームページ製作" v1="個人開発(1month)" v2="React/Larabelを使用"
                            link="https://github.com/naoya0930/ColorLessLens" linkName="リンク(Now)"/>
                    </div>
                    <h3>And More...!!</h3>
                </div>
                <div className='comment'>
                    <h2>Other Contents</h2>
                </div>
            </div>
            <div className='footer-contents'>
                <small>Copyright (c)2020 / NAO-F.</small>
            </div>
        </div>
    );
}
export default App;
//このIDとblade.phpが一致してる
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}