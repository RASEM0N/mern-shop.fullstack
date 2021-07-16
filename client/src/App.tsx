import React, { FunctionComponent } from 'react'
import Layout from './components/Layout/Layout'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

const App: FunctionComponent = () => {
    // ...

    return (
        <Layout>
            <main className="py-3">
                <Container>
                    <HomeScreen />
                </Container>
            </main>
        </Layout>
    )
}

export default App
