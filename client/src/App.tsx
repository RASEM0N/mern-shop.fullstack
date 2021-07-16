import React, { FunctionComponent } from 'react'
import Layout from './components/Layout/Layout'
import { Container } from 'react-bootstrap'

const App: FunctionComponent = () => {
    // ...

    return (
        <Layout>
            <main className="py-3">
                <Container>
                    <h1>Welcome To Shop</h1>
                </Container>
            </main>
        </Layout>
    )
}

export default App
