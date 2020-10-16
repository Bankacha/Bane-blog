import React from 'react';
import { Button, Col, Table, FormControl, Form, Row } from 'react-bootstrap';


export default class PostPicker extends React.Component {

    state = {
        filtered: this.props.posts
    }


    handleEvent = (event) => {
        const search = event.target.value;
        this.setState({
            filtered: this.props.posts.filter((post, i) => post.title.includes(search))
        })
    }

    // getFiltered = () => {
    //     this.setState({
    //         filtered: this.props.posts.filter((post, i) => post.title.includes(this.state.search))
    //     })
    // }

    render() {
        return (
            <Col md={6}>
                <Row className="mb-3">
                    <Col>
                        <FormControl onChange={this.handleEvent} type="text" placeholder="Search Blog" className="mr-sm-2" />
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th className='text-center'>Body</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filtered.map((post, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td> <Button onClick={() => this.props.onSelect(post.id)}>More</Button></td>
                                    </tr>
                                )
                            })
                        }

                        {/* <tr>
                            <td className='text-center' colSpan={4}>There is no posts for this criteria.</td>
                        </tr> */}


                    </tbody>
                </Table>
            </Col>
        )
    }
}