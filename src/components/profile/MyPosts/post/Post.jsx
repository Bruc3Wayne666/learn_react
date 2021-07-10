import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src={'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0'} alt="picture"/>
            {props.post.text}
            <span className={classes.likes}>Likes: {props.post.likesCount}</span>
        </div>
    )
}

export default Post