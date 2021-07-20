import { ActionTypes } from './action-types';

const fetchData = async i => {
    let response;
    try {
    } catch (err) {}

    if (response.status === 200) {
        const json = await response.json();
        return json;
    } else {
        // throw new Error(response.statusText);
    }
};

export const fetchCouncillors = pageNumber => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.FETCH_COUNCILLORS,
        });

        try {
            // ***** fetching data from each page *****
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