import classes from "../dialogs/Dialogs.module.css"
import React from "react";


const Dialogs = props => {
    const dialogs = props.dialogs
    const messages = props.messages

    const newMessageElement = React.createRef()

    const send = () => {
        props.sendMessage()
    }

    const onChange = () => {
        const text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <div className={classes.send}>
                    <textarea onChange={onChange} ref={newMessageElement} placeholder='Type here' value={props.newMessageText} className={classes.content}/>
                    <button onClick={send} className={classes.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs