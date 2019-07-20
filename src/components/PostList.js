import React from 'react';
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import {fetchUser} from "../actions";
// import { fetchPosts } from "../actions";

import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    renderList () {
        return this.props.myPosts.map( post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    };

    render() {
        // console.log(this.props.myPosts);
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { myPosts:state.posts };
};

export default connect(mapsStateToProps, { fetchPostsAndUsers })(PostList)