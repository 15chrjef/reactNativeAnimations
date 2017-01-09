import { PROFILE_SUCCESS } from './types';

export const profileLoad = ( prop ) => {
	console.log('action', prop)
	return {
		type: PROFILE_SUCCESS,
		payload: { prop }
	};
};