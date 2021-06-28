import classes from "../CreatePost/CreatePost.module.css"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import CreatePost from "./CreatePost";



const CreatePostContainer = props => {
    const post = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <CreatePost updateNewPostText={onChange} addPost={post} newPostText={props.store._state.profilePage.newPostText}/>
    )
}

export default CreatePostContainer