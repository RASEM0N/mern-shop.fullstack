import React, { FunctionComponent } from 'react'
import Layout from './components/Layout/Layout'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { Switch, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

const App: FunctionComponent = () => {
    // ...

    return (
        <Layout>
            <main className="py-3">
                <Container>
                    <Switch>
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/product/:id" component={ProductScreen} />
                    </Switch>
                </Container>
            </main>
        </Layout>
    )
}

export default App
