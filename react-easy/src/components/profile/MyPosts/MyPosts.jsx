import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = props => {
    const posts = props.posts.map(post => <Post post={post} />)

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            {posts}
        </div>
    )
}

export default MyPosts