import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const postsData = [
    {id: 1, text: 'QQ ALL', likesCount: 3},
    {id: 2, text: 'wow', likesCount: 2},
    {id: 3, text: 'haha', likesCount: 4},
    {id: 4, text: 'good morning!', likesCount: 1}
]
let dialogsData = [
    {
        id: 1,
        name: 'Henry'
    },
    {
        id: 2,
        name: 'Mark'
    },
    {
        id: 3,
        name: 'Clark'
    },
    {
        id: 4,
        name: 'Bruce'
    }
]
let messagesData = [
    {
        id: 1,
        text: 'Good evening!'
    },
    {
        id: 2,
        text: 'You lost your wallet'
    },
    {
        id: 3,
        text: 'How can I return it?'
    },
    {
        id: 4,
        text: 'Ok!'
    }
]

const store = {
    _state: {
        profilePage: {
            posts: postsData,
            newPostText: ''
        },
        dialogsPage: {
            dialogs: dialogsData,
            messages: messagesData,
            newMessageText: ''
        },
        sidebar: {}
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('---')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


export default store