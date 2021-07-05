import classes from "../CreatePost/CreatePost.module.css"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const CreatePost = props => {
    const newPostElement = React.createRef()

    const post = () => {
        props.addPost()
    }

    const onChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.create}>
            <div>
                <label>New post</label>
                <textarea ref={newPostElement} onChange={onChange} placeholder='Type here' value={props.newPostText} className={classes.content} />
            </div>
            <div>
                <button onClick={post} className={classes.button} type='submit'>Create</button>
            </div>
        </div>
    )
}

export default CreatePost