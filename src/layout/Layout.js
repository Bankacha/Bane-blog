import React from 'react';
import { Container } from "react-bootstrap";
import Header from './Header'


export default class Layout extends React.Component {


    render() {
        return (

            <div>
                <Header></Header>
                <Container className="pt-5">
                    {this.props.children}
                </Container>
            </div>
        )
    }
}