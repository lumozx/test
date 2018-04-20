import React, { Component } from 'react';
import {Switch, Route,Link } from 'react-router-dom'
import Test from './test';
import C1 from './c1';
import C2 from './c2';
class Test2 extends Component{

  render(){
    return(
     <div>
     <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
      <Switch>
      <Route exact path='/' component={C1}/>
      <Route exact path='/' component={C1}/>
      <Route path='/roster' component={C2}/>
      <Route path='/schedule' component={Test}/>
    </Switch>
     </div>
      )
  }
}
//react的路由匹配是根据path匹配的，与vue的思路是不同的，vue虽然有命名视图，但是建立在同一个children下用来判断不同的视图对接不同的模板的，而react不用明明路由，而是在合适的组件里面放入视图，指定模板
//route是重点渲染，link不过是a链接，route匹配链接，然后渲染对应的模板，去掉switch之后会有复数个C1，exact是完全匹配
export default Test2;