import {
	PROFILE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { profiles: []};

export default  (state = INITIAL_STATE, action)  => {
	switch (action.type) {
		case PROFILE_SUCCESS:
			return { 
				...state,
				profiles: action.payload
			}
		default:
			return state;
	}
};
