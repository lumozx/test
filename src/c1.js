import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from'./store.js'


class C1 extends Component{
	render(){
// 		store.subscribe(()=>console.log(store.getState()))

// store.dispatch({type:'one'})
// store.dispatch({type:'two'})
// store.dispatch({type:'three'})
		return (
			<div>this is C1</div>)
	}
}

function select(state) {
	// console.log(state)
    return {
      count : state.count,
    }
}

export default connect(select)(C1);;