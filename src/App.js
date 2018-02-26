import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import Test2 from './test2';
import { connect } from 'react-redux';
class Clock extends Component{
  constructor(props) {
    super(props);
    
//接受props,但此刻并不利用
    this.state = {date: new Date(),isT:true};
    // this.hand = this.hand.bind(this)//绑定this，把this传入进去,这是一种方法，还有一种方法，hand后面加()，并使用箭头函数，第三种方法是在click的时候使用箭头函数，自动传递this
    // state是写死的固定变量
  }
  componentDidMount() {
    this.s = setInterval(
      () => this.tick(),
      1000
    );
  }
  hand=()=>{
    console.log(this.props)
    this.props.onClick()
    // this.props.two()
// this.props.dispatch({type:'one'})
//setState第一种使用方式是传入新的对象，简单粗暴，但无法用于异步运算，因此传入一个函数，有两个参数，第一个是state，第二个是props，return一个对象，是新对象
    this.setState((p,s) =>({
      isT:!p.isT
    }))
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });

    //不能直接this.state赋值，不会渲染组件,setState会引起变化
  }
  render(){
    return(
       <div>
         <h3 >{this.state.date.toLocaleString()}</h3>
       <button onClick={this.hand}>{this.state.isT?'on':'off'}</button>
       </div>  
      )
  }
}

function select(state) {
  // console.log(state)
    return {
      count : state.count,
    }
}

function mapDispatchToProps(dispatch, ownProps){
  // console.log(ownProps)ownProps是容器的props
  return {
    onClick: () => {
      dispatch({type: 'one'});
    },
    two:()=>{
       dispatch({type: 'two'});
    }
  };
}

var Clock1 =  connect(select,mapDispatchToProps)(Clock);;
//第二个参数可以省略，在组件里面自由发挥，亦或者在此映射，比如，这个就是映射到onClick上，用的时候不用再props.dispath(XXXX)，而是直接使用onclick

class CustomTextInput extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  focus=()=> {
    // 直接使用原生 API 使 text 输入框获得焦点
    this.textInput.focus();
    console.log(this.textInput.value)
  }

  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React 
    //ref里面是自动执行
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input  type="text" defaultValue='66'     ref={(e) => { this.textInput = e; }} />
        <input    type="button"   value="Focus the text input"    onClick={this.focus}     />
      </div>
    );
  }
}

class App extends Component {
    constructor(props) {
    super(props);
//接受props,但此刻并不利用
    // console.log(props)
  }
  render() {
    return (//加括号为了让他成为表达式
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
 
          <Clock1 name='1'/>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <CustomTextInput  />
        <Test/>
        <Test2/>
      </div>
    );
  }
}

export default App;
