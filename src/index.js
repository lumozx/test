import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import store from'./store.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// const ele = React.createElement('h1',{className:'aaaa'},'what');
// console.log(ele)
// ele以及<APP/>都是react元素，实质上是一个对象，APP不是react元素
// store.subscribe(()=>console.log(store.getState()))

store.dispatch({type:'one'})
// store.dispatch({type:'two'})
// store.dispatch({type:'three'})
	ReactDOM.render( <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

registerServiceWorker();
