import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Henry_Cavill_at_the_2009_Tribeca_Film_Festival.jpg/170px-Henry_Cavill_at_the_2009_Tribeca_Film_Festival.jpg" alt="picture"/>
            {props.post.text}
            <span className={classes.likes}>Likes: {props.post.likesCount}</span>
        </div>
    )
}

export default Post