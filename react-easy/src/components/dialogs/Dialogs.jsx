import classes from "../dialogs/Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = props => {
    const dialogs = props.state.dialogs.map(dialog => <DialogItem person={dialog} />)

    const messages = props.state.messages.map(message => <MessageItem message={message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs