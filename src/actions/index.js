import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};

// redux allows action creators return a function, and can take dispatch, getState (both are functions) as first two arguments
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // remember to dispatch others action creators manually
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()

    // same logic as above
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
};

// // Alternative way to avoid duplicates requests
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// });
//
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
// //equals to:
// export const fetchUser = (id) => {
//     return (dispatch) => {
//         return _fetchUser(id, dispatch)
//     };
// };