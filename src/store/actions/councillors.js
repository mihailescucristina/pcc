import { ActionTypes } from './action-types';

export const fetchCouncillors = pageNumber => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.FETCH_COUNCILLORS,
        });

        try {
            // ***** fetching data from each page *****
            // had to use a proxy server because of the cors error
            const response = await fetch(
                `https://guarded-beyond-25903.herokuapp.com/http://ws-old.parlament.ch/councillors?format=json&lang=en&pageNumber=${pageNumber}`
            );

            if (response.status === 200) {
                const json = await response.json();
                dispatch({
                    type: ActionTypes.FETCH_COUNCILLORS_COMPLETE,
                    payload: json,
                });
            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            dispatch({
                type: ActionTypes.FETCH_COUNCILLORS_ERROR,
                payload: err.message,
            });
        }
    };
};
