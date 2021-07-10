import Presentation from "./Presentation/Presentation";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import CreatePostContainer from "./CreatePost/CreatePostContainer";


const Profile = props => {
    return (
        <section>
            <Presentation profile={props.profile}/>
            <CreatePostContainer />
            <MyPostsContainer />
        </section>
    )
}

export default Profile