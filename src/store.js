import { createStore,combineReducers,applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
    count : 0,      // count = 0
    loaded : false, // 异步请求是否加载
    personList : [  // 人员列表
        {"name" : "lily", "age" : 21}
    ]
};

function count(state=initialState.count,action) {
	switch(action.type){
        case 'one':
        return state +1;
		case 'two':
		return state -1;
		case 'three':
		return state;
		default : 
            return state;
	}
}
function count1(state=initialState.count,action) {
	switch(action.type){
		case 'one':
		return state +2 ;
		case 'two':
		return state -1;
		case 'three':
		return state;
		default : 
            return state;
	}
}
//count 和count1是两个store,active可以相同，但对于简单数值来说互不影响，但对于复杂类型，用到了push等方法，那么修改一个，其余都会受到影响，因此使用assign的拷贝功能，return 的是新状态，将作为下一次的state
//必须要default
const all = combineReducers({
    count,count1
});
// const store = createStore(
//   all,
//   applyMiddleware(thunkMiddleware)
// ); 
//上面跟下面是等价的
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);//挂载中间件
 const store = createStoreWithMiddleware(all);
export default store;
