import * as types from '../constants/ActionTypes'

const users = (states=[], action) => {
	switch (action.type) {
		case types.ADD_USER:
			return states.concat([
					{name: action.name,id:action.id}
				])
		case types.USER_LIST:
			return action.user
		default:
			return states
	}
}

export default users