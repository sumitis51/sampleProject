import {
    ACTION_COMMON_START, ACTION_COMMON_END, SET_TOASTER_MESSAGE
} from './common.actiontype';

export const setToasterMessage = (data) => async (dispatch) => {
    dispatch({type: SET_TOASTER_MESSAGE, payload: data });
}