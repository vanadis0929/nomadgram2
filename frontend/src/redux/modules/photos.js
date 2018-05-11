// imports

import {
  actionCreators as userActions
} from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";
//const DELETE_COMMENT = "DELETE_COMMENT";

// action creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  console.log('doLikePhoto: LIKE_PHOTO type을 가진 reducer를 실행')
  return {
    type: LIKE_PHOTO, //해당하는 타입을 찾는다.
    photoId
  };
}

function doUnlikePhoto(photoId) {
  console.log('doUnlikePhoto: UNLIKE_PHOTO type을 가진 reducer를 실행')
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

function addComment(photoId, comment) {
  return {
    type: ADD_COMMENT,
    photoId,
    comment
  };
}

/*
function removeComment(photoId, messageId) {
  return {
    type: DELETE_COMMENT,
    photoId,
    messageId
  };
}
*/

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: {
        token
      }
    } = getState();
    fetch("/images/", {
        headers: {
          Authorization: `JWT ${token}`
        }
      })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setFeed(json));
      });
  };
}

function likePhoto(photoId) {
  console.log('likePhoto: photoActions의 mapDispatchToProps 에서 보냄')
  return (dispatch, getState) => {
    console.log('doLikePhoto로 dispatch');
    dispatch(doLikePhoto(photoId));
    const {
      user: {
        token
      }
    } = getState();
    fetch(`/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doUnlikePhoto(photoId));
      }
    });
    console.log('backend에 좋아요 + 카운트 집계 된 값 보냄');
  };
}

function unlikePhoto(photoId) {
  console.log('unlikePhoto: photoActions의 mapDispatchToProps 에서 보냄')
  return (dispatch, getState) => {
    console.log('doUnlikePhoto로 dispatch');
    dispatch(doUnlikePhoto(photoId));
    const {
      user: {
        token
      }
    } = getState();
    fetch(`/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doLikePhoto(photoId));
      }
      console.log('backend에 좋아요 - 카운트 집계 된 값 보냄');
    });
  };
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const {
      user: {
        token
      }
    } = getState();
    fetch(`/images/${photoId}/comments/`, {
        method: "POST",
        headers: {
          Authorization: `JWT ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message
        })
      })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.message) {
          dispatch(addComment(photoId, json));
        }
      });
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      console.log('reducer: action.type = LIKE_PHOTO 이므로 applyLikePhoto 함수로 이동')
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
     console.log('reducer: action.type = UNLIKE_PHOTO 이므로 applyUnlikePhoto 함수로 이동')
      return applyUnlikePhoto(state, action);
    case ADD_COMMENT:
      return applyAddComment(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetFeed(state, action) {
  const {
    feed
  } = action;
  return {
    ...state,
    feed
  };
}

function applyLikePhoto(state, action) {
  console.log('applyLikePhoto: is_liked: true / 좋아요 카운트 + 1 누적')
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo,
        is_liked: true,
        like_count: photo.like_count + 1
      };
    }
    return photo;
  });
  return { ...state,
    feed: updatedFeed
  };
}

function applyUnlikePhoto(state, action) {
  console.log('applyUnlikePhoto: is_liked: false / 좋아요 카운트 - 1 누적')
  const {
    photoId
  } = action;
  const {
    feed
  } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo,
        is_liked: false,
        like_count: photo.like_count - 1
      };
    }
    return photo;
  });
  return { ...state,
    feed: updatedFeed
  };
}

function applyAddComment(state, action) {
  const {
    photoId,
    comment
  } = action;
  const {
    feed
  } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return {
        ...photo,
        comments: [...photo.comments, comment]
      };
    }
    return photo;
  });
  return { ...state,
    feed: updatedFeed
  };
}

// Exports

const actionCreators = {
  getFeed,
  likePhoto,  
  unlikePhoto,
  commentPhoto
};

export {
  actionCreators
};

// Export reducer by default

export default reducer;
