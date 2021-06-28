import classes from "../dialogs/Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";



const Dialogs = props => {
    let state = props.store.getState().dialogsPage
    const dialogs = state.dialogs.map(dialog => <DialogItem person={dialog} />)
    const messages = state.messages.map(message => <MessageItem message={message} />)

    const newMessageElement = React.createRef()

    const send = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChange = () => {
        const text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <div className={classes.send}>
                    <textarea onChange={onChange} ref={newMessageElement} placeholder='Type here' value={state.newMessageText} className={classes.content}/>
                    <button onClick={send} className={classes.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs