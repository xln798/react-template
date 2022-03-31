/* eslint-disable no-unreachable */
import * as types from './action-types';

let initialState = {//定义初始状态
	step: 1,
	patient: {},
	operation: {},
	defaultKey: 1,

}
let reducer = (state = initialState, action) => {
	switch (action.type) {
	case types.GO:
		return {...state, step: action.payload};
		break;
	case types.INSPECT:
		return {...state, patient: action.payload};
		break;
	case types.INIT:
		return {...state, operation: action.payload};
		break;
	case types.DEFAULTKEY:
		return {...state, defaultKey: action.payload};
		break;
	default:
		return state;
	}
}
export default reducer
