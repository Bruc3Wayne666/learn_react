import classes from './User.module.css'


const User = props => {
    return (
        <div key={props.id} className={classes.user}>
            <div className={classes.avatar}>
                <img src={props.user.photoUrl} alt="ll"/>
            </div>
            <div className={classes.about}>
                <div className={classes.name}>
                    {props.user.fullName}
                </div>
                <div className={classes.status}>
                    {props.user.status}
                </div>
            </div>
            <div className={classes.location}>
                {props.user.location.city}, {props.user.location.country}
            </div>
            <div className={classes.button}>
                {props.user.followed
                    ? <button className={classes.follow} onClick={() => props.follow(props.user.id)}>Follow</button>
                    : <button className={classes.unfollow} onClick={() => props.unfollow(props.user.id)}>Unfollow</button>}
            </div>
        </div>
    )
}

export default User