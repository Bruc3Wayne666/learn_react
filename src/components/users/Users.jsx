import classes from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small :
                                'https://www.enduresc.com.au/wordpress/wp-content/uploads/2018/05/user-profile.jpg'
                            } alt="ll"/>
                        </NavLink>
                    </div>
                    <div className={classes.about}>
                        <div className={classes.name}>
                            <NavLink to={`/profile/${user.id}`}>
                                {user.name}
                            </NavLink>
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
                                      onClick={() => {
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '60feff02-c998-4c3f-a2b3-1303bd178dc8'
                                              }
                                          })
                                              .then(res => {
                                                  if (res.resultCode === 0) {
                                                      props.unfollow(user.id)
                                                      console.log('unfollowed')
                                                  }
                                              })
                                      }}>Unfollow</button>
                            : <button className={classes.follow}
                                      onClick={() => {
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '60feff02-c998-4c3f-a2b3-1303bd178dc8'
                                              }
                                          })
                                              .then(res => {
                                                  if (res.resultCode === 0) {
                                                      props.follow(user.id)
                                                      console.log('followed')
                                                  }
                                              })
                                      }}>Follow</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users