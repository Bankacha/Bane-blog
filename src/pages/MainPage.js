import React from 'react';
import PostPicker from '../components/PostPicker';
import Post from '../components/Post';
import { Row } from 'react-bootstrap';
import JSONposts from '../resources/posts.json';
import JSONcomments from '../resources/comments.json';

export default class MainPage extends React.Component {

    state = {
        posts: JSONposts,
        comments: JSONcomments,
        selectedPost: null,
        selectedPostComments: [],
        filtered: JSONposts
    }

    selectPost = (postId) => {
        let selected = this.state.posts.find((post) => post.id === postId);
        let comments = this.state.comments.filter((comment) => comment.postId === selected.id);

        this.setState({
            selectedPost: selected,
            selectedPostComments: comments
        })

        console.log({
            selectedPost: selected,
            selectedPostComments: comments
        })
    }

    render() {
        return (
            <Row>
                <PostPicker posts={this.state.posts} onSelect={this.selectPost}></PostPicker>
                <Post info={this.state.selectedPost} comments={this.state.selectedPostComments}></Post>
            </Row>
        )
    }

}