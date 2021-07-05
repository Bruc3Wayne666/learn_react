import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts.map(post => <Post post={post} />)
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer