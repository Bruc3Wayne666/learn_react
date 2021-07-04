import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs.map(dialog => <DialogItem person={dialog}/>),
        messages: state.dialogsPage.messages.map(message => <MessageItem message={message}/>),
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageText: text => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer