import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import CreatePost from "./CreatePost/CreatePost";
import Presentation from "./Presentation/Presentation";


const Profile = () => {
    return (
        <section className={classes.content}>
            <Presentation />
            <CreatePost />
            <MyPosts />
        </section>
    )
}

export default Profile