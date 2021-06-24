import classes from "../MyPosts/MyPosts.module.css";
import MyPost from "./post/MyPost";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <MyPost/>
            <MyPost/>
            <MyPost/>
        </div>
    )
}

export default MyPosts