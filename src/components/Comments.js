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
                            <div>
                                <p key={i}>{com['name']}</p>
                                <p key={i}>{com['email']}</p>
                                <p key={i}>{com['body']}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}