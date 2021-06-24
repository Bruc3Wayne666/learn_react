import classes from "../CreatePost/CreatePost.module.css"

const CreatePost = () => {
    return (
        <div className={classes.create}>
            <label>New post</label>
            <textarea className={classes.content} />
            <button className={classes.button} type='submit'>Create</button>
        </div>
    )
}

export default CreatePost