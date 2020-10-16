import React from 'react';
import { Navbar } from 'react-bootstrap';


export default class Header extends React.Component {

    

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Welcome To My First Blog</Navbar.Brand>

                </Navbar>

            </div>
        )
    }
}