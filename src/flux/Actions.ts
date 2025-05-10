import { AppDispatcher } from './Dispatcher';

FetchActionType {
    GET_FETCH: 'GET_FETCH'
}



export const fetchAction = {
    do: () => {
        AppDispatcher.dispatch({});
    },

};

