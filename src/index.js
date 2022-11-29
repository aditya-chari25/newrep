import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import MainM from './components/Main-mobile';
import './components/animate.css'
import './components/Main.css'
import './index.css'
import * as serviceWorker from './serviceWorker';
const mob = window.innerWidth <= 600;
const App = () => {
 return(
     <div>{mob ? <MainM /> : <Main />}</div>
    
 )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
