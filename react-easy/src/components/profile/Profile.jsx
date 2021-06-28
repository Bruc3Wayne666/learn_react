import classes from './Profile.module.css'
import Presentation from "./Presentation/Presentation";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import CreatePostContainer from "./CreatePost/CreatePostContainer";


const Profile = props => {
    return (
        <section>
            <Presentation />
            <CreatePostContainer store={props.store}/>
            <MyPostsContainer store={props.store} />
        </section>
    )
}

export default Profile