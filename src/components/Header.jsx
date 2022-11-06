import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';

const pages = [
    {
        id: 1,
        route: '/',
        title: 'Logo'
    },
    {
        id: 2,
        route: '/articles',
        title: 'Articles'
    },
    {
        id: 3,
        route: '/categories',
        title: 'Categories'
    }
]

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = route => () => {
        navigate(route);
    };

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Nav className='me-auto'>
                    {pages.map(
                        page => (
                            <Nav.Link
                                key={page.id}
                                onClick={handleNavigate(page.route)}>
                                {page.title}
                            </Nav.Link>
                        )
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;