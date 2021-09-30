import { createGlobalStyle } from 'styled-components'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from './pages/Home'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'

import ScrollToTop from './components/ScrollToTop'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Poppins';
        font-weight: 400;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
    }

    ol, ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`


function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/create" exact>
                    <CreatePost />
                </Route>
                <Route path="/:slug">
                    <Post />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
