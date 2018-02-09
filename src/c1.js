import React, { Component } from 'react';
import store from'./store.js'


class C1 extends Component{
	render(){
		store.subscribe(()=>console.log(store.getState()))

store.dispatch({type:'one'})
// store.dispatch({type:'two'})
// store.dispatch({type:'three'})
		return (
			<div>this is C1</div>)
	}
}

export default C1;