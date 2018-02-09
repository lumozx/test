import React, { Component } from 'react';



function tc(f){
  return (f-32)*5/9
}
function tf(f){
  return (f*9/5)+32
}

const sname ={
  c: 'Celsius',
  f: 'Fahrenheit'
}
//工具函数

class Tem extends Component{
  // constructor(props){
  //   super(props);
  // }
  handlenchange=(e)=>{
    this.props.tochange(e.target.value)
  }
  // 把父组件传过来的函数用自己的值进行执行,之所以不用temp，是因为temp的值此时是不变的，只能去手动更改
  render(){
    const temp = this.props.temp;
    const sclae = this.props.sclae;
    //1将父组件传过来的变动值进行赋值，2绑定标示
    return(
     <div>
     <p>
       this is {sname[sclae]}
     </p>
        <input type="text" value={temp} onChange={this.handlenchange}/>
     </div>
      )
  }
}
class Zong extends Component{
  constructor(props){
    super(props);
    this.state = {
      sclae : 'f',
      tem : ''
    }
    //父组件定义默认值,上面为焦点，下面为默认数值大小
  }
  fc=(tem)=>{
    this.setState({sclae : 'f',tem})
  }
  cc=(tem)=>{
    this.setState({sclae : 'c',tem})
  }
  render(){

        const celsius = this.state.sclae === 'f' ? tc(this.state.tem) : this.state.tem;
        //是当前输入框吗，如果是，那么当前输入框的变为当前输入框的值，如果不是，就是变为计算值
    const fahrenheit = this.state.sclae === 'c' ? tf(this.state.tem) : this.state.tem;
    //tem没有显式传递，而是听过temp进行传递，也就是说，在渲染模板的时候，就已经计算了一次
    return(
     <div>
     <Tem sclae='f' tochange={this.fc}  temp={fahrenheit}/>

     <Tem sclae='c' tochange={this.cc}  temp={celsius}/>
     </div>
      )
    //当明确输入的主要框体（焦点）是哪一个的时候，明确sclae状态，然后更改另一个输入框的值
  }
}




class Test extends Component {
  render() {
    return (//加括号为了让他成为表达式
      <div>
      <Zong />
      <h2>这是test啊啊啊{new Date().toLocaleString()}</h2>
      </div> 
    );
  }
}
export default Test;
