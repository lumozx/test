import React, { Component } from 'react';
import { Route,Link,Prompt } from 'react-router-dom'


import C1 from './c1';
class C2 extends Component{
	gog=()=>{
		this.props.history.push('/')
	}
	render(){
					console.log(this.props.history)
		return (
	
		<div>
				<div>this is C2</div>
				        <Prompt    message="数据尚未保存，确定离开？" />
				<button onClick={this.gog}>ggg</button>
			       <Link to='/roster/a'>Schedule</Link>
			        <Route path='/roster/a' component={C1}/>
		</div>
			)
	}
}

export default C2;