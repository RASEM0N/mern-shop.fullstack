import createSagaMiddleware from 'redux-saga'
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { rootReducer, rootSaga } from './root'

const sagaMiddleware = createSagaMiddleware()
const middlewares = new MiddlewareArray().concat(sagaMiddleware)

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: middlewares,
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
