const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
    dialogs: [
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
    ],
    messages: [
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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, text: state.newMessageText}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = text => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer