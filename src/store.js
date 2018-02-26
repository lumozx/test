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
function count1(state=initialState,action) {
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
