import classes from "../Dialogs.module.css";

const MessageItem = props => {
    return (
        <div className={classes.message}>
            {props.message.id + '   ' + props.message.text}
        </div>
    )
}

export default MessageItem