import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"
import CreatePost from "./CreatePost/CreatePost";
import Presentation from "./Presentation/Presentation";


const Profile = props => {
    return (
        <section>
            <Presentation />
            <CreatePost />
            <MyPosts posts={props.state.posts} />
        </section>
    )
}

export default Profile