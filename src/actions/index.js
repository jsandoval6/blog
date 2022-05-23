import jsonPlaceHolder from "../APIS/jsonPlaceHolder";
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // eslint-disable-next-line no-unused-expressions
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts =  () => {
    return async function(dispatch ) {
        const response  = await jsonPlaceHolder.get('/posts');
        dispatch({
          type: "FETCH_POSTS",
          payload: response.data,
        });
    }  
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data
    })
}

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   })
// });