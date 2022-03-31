import * as types from './action-types';
//定义事件函数集合
export default {
	setStep(payload) {
		return function (dispatch, getState) {
			dispatch({
				type: types.GO,
				payload
			})
		}

	},
	setInspectPatient(payload) {
		return function (dispatch, getState) {
			dispatch({
				type: types.INSPECT,
				payload
			})
		}
	},
	setDefaultKey(payload) {
		return function (dispatch, getState) {
			dispatch({
				type: types.DEFAULTKEY,
				payload
			})
		}
	},
	init(payload) {
		return function (dispatch, getState) {
			dispatch({
				type: types.INIT,
				payload
			})
		}
	}
}
