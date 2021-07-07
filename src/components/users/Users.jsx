import classes from "./Users.module.css";
import React from "react";

const Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={classes.users}>
            <div className={classes.pages}>
                <span onClick={e => props.onArrow('&#8637;')}>&#8637;</span>
                {pages.map(page => <span
                    onClick={e => props.onPageChanged(page)}
                    className={props.currentPage === page && classes.selectedPage}>{page}</span>)}
                <span onClick={e => props.onArrow('&#8640;')}>&#8640;</span>
            </div>
            {props.users.map(user => (
                <div key={user.id} className={classes.user}>
                    <div className={classes.avatar}>
                        {/*<img src={user.photos.small != null ? user.photos.small : null} alt="ll"/>*/}
                        <img src='https://static.wikia.nocookie.net/gtawiki/images/7/70/CJ-GTASA.png/revision/latest/top-crop/width/360/height/360?cb=20190612091918' alt="ll"/>
                    </div>
                    <div className={classes.about}>
                        <div className={classes.name}>
                            {user.name}
                        </div>
                        <div className={classes.status}>
                            {user.status}
                        </div>
                    </div>
                    <div className={classes.location}>
                        {'user.location.city'}, {'user.location.country'}
                    </div>
                    <div className={classes.button}>
                        {user.followed
                            ? <button className={classes.unfollow}
                                      onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button className={classes.follow}
                                      onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users