import { createStore } from 'redux';

function count(state=0,action) {
	switch(action.type){
		case 'one':
		return state +1;
		case 'two':
		return state -1;
		case 'three':
		return state;
	}
}
 const store = createStore(count);
export default store;
