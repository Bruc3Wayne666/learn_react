const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        {id: 1, text: 'QQ ALL', likesCount: 3},
        {id: 2, text: 'wow', likesCount: 2},
        {id: 3, text: 'haha', likesCount: 4},
        {id: 4, text: 'good morning!', likesCount: 1}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {  // Решил впервые попробовать через switch case. Using switch case for the first time
        case ADD_POST:
            const newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            state.newPostText = ''
            state.posts.push(newPost)
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer