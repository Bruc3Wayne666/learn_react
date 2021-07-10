const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        {id: 1, text: 'QQ ALL', likesCount: 3},
        {id: 2, text: 'wow', likesCount: 2},
        {id: 3, text: 'haha', likesCount: 4},
        {id: 4, text: 'good morning!', likesCount: 1}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {  // Решил впервые попробовать через switch case. Using switch case for the first time
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, text: state.newPostText, likesCount: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile})

export default profileReducer