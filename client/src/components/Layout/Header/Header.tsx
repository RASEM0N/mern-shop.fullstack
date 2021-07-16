import React, { FunctionComponent } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header: FunctionComponent = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect={true}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Shop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{
                            flexGrow: 0,
                        }}>
                        <Nav className="me-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart" />
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/sign-in">
                                <Nav.Link>
                                    <i className="fas fa-user" />
                                    Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
