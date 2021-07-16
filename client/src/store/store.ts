import createSagaMiddleware from 'redux-saga'
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()
const middlewares = new MiddlewareArray().concat(sagaMiddleware)

const store = configureStore({
    reducer: {},
    devTools: true,
    // middleware: middlewares,
})

// sagaMiddleware.run()

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
