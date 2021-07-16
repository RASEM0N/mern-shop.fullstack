import React, { FunctionComponent } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header: FunctionComponent = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect={true}>
                <Container>
                    <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        style={{
                            flexGrow: 0,
                        }}>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">
                                <i className="fas fa-shopping-cart"></i>
                                Cart
                            </Nav.Link>
                            <Nav.Link href="/link">
                                <i className="fas fa-user"></i>
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
