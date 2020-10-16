import React from 'react';
import { Container } from "react-bootstrap";
import Header from './Header'


export default function Layout(props) {
    return (
        <div>
            <Header></Header>
            <Container className="pt-5">
                {props.children}
            </Container>
        </div>
    )

}