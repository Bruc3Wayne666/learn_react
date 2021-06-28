import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
    const posts = props.store.getState().profilePage.posts.map(post => <Post post={post} />)

    return (
        <MyPosts posts={posts}/>
    )
}

export default MyPostsContainer