import React from "react";
import JSONposts from '../resources/posts.json';
import { Media } from "react-bootstrap";





export default class Posts extends React.Component {


    getPostList = () => {
        let postList = [];

        for (let post of JSONposts) {
            postList.push(post)
        }
        return postList;

    }

    getTitlePost = () => {
        let postTitle;
        for (let post of JSONposts) {
            postTitle = post["title"]
        }
        console.log(postTitle)
        return postTitle;
    }



    render() {

        return (



            <div>


                <Media>
                    <Media.Body>
                        {
                            this.getPostList().map((post, i) => {
                                return (
                                    <div key={i}>
                                        <h5 >{post["title"]}</h5>
                                        <p >{post["body"]}</p>
                                    </div>
                                )
                            })
                        }
                        {/* {this.getTitlePost()} */}
                    </Media.Body>
                    {/* <img
                        width={64}
                        height={64}
                        className="ml-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                    /> */}
                </Media>
            </div>
        )
    }

}