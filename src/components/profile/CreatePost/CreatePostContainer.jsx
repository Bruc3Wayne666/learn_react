import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer