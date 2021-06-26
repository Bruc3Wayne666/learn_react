import classes from "./Post.module.css";

const Post = props => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/porsche-logo-in-red-on-black-liana-haraga.jpg?&targetx=0&targety=-35&imagewidth=977&imageheight=810&modelwidth=977&modelheight=740&backgroundcolor=000000&orientation=1&producttype=blanket-coral-60-80" alt="picture"/>
            {props.post.text}
            <span className={classes.likes}>Likes: {props.post.likesCount}</span>
        </div>
    )
}

export default Post