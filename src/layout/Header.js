import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';


export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Welcome To My First Blog</Navbar.Brand>
                
                <Form inline>
                    <FormControl type="text" placeholder="Search Blog" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </div>
    )
}