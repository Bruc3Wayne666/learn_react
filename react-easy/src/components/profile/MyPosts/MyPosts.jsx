import classes from "./MyPosts.module.css";

const MyPosts = props => {
    const posts = props.posts

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            {posts}
        </div>
    )
}

export default MyPosts