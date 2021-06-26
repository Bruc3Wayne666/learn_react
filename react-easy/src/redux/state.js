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
        text: 'How can I return it?'
    }
]


const state = {
    profilePage: {
        posts: postsData,
    },
    dialogsPage: {
        messages: messagesData,
        dialogs: dialogsData
    }
}

export default state