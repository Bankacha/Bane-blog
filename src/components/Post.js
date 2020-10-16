import React from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';

export default class Post extends React.Component {


    getInfoIfExist = (key) => {
        if (this.props.info && this.props.info[key]) {
            return this.props.info[key];
        }
        return '';
    }

    render() {
        return (
            <Col md={6}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://picsum.photos/300/200" />
                    <Card.Body>
                        <Card.Title>{this.getInfoIfExist('title')}</Card.Title>
                        <Card.Text>
                            {this.getInfoIfExist('body')}
                        </Card.Text>

                        <ListGroup>
                            {
                                this.props.comments.map((com, i) => <ListGroup.Item key={i}>{com.body}</ListGroup.Item>)
                            }
                            
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}