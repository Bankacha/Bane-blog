import React from 'react';
import Comments from './Comments';
import Posts from './Posts';


export default class MainPage extends React.Component {

    state = {

    }

    render () {
        return (
            <div>
                <Posts></Posts>
                <Comments></Comments>
            </div>
        )
    }

}