import React from "react";
import JSONcomments from '../resources/comments.json';

export default class Comments extends React.Component {


    getCommentList = () => {
        let commentList = [];

        for (let comment of JSONcomments) {
            commentList.push(comment)
        }
        return commentList;

    }

    render() {
        return (
            <div>
                {
                    this.getCommentList().map((com, i) => {
                        return (
                            <div key={i}>
                                <p >{com['name']}</p>
                                <p >{com['email']}</p>
                                <p >{com['body']}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}