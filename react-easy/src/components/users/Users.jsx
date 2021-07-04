import classes from "./Users.module.css";
import axios from "axios";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                // this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setTotalUsersCount(88)
            })
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    onArrow = arrow => {
        this.props.moveOnPage(arrow)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render()
    {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={classes.users}>
            <div className={classes.pages}>
                <span onClick={e => this.onArrow('&#8637;')}>&#8637;</span>
                {pages.map(page => <span
                    onClick={e => this.onPageChanged(page)}
                    className={this.props.currentPage === page && classes.selectedPage}>{page}</span>)}
                <span onClick={e => this.onArrow('&#8640;')}>&#8640;</span>
            </div>
            {this.props.users.map(user => (
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
                                      onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            : <button className={classes.follow}
                                      onClick={() => this.props.follow(user.id)}>Follow</button>}
                    </div>
                </div>
            ))}
        </div>
    }
}

export default Users