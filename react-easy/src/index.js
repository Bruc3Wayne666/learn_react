import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import store from './redux/redux-store'
import store from './redux/store'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals()