import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Root extends React.Component {
    render() {
        return (
            <div>
                <div><Link to="/">Root</Link></div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <div>About</div>
                <span>location: {JSON.stringify(this.props.location)}</span><br/>
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <div>Client</div>
                <span>location: {JSON.stringify(this.props.location)}</span><br/>
                { this.props.children }
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>Home</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={About} />
                    <Route path="user" component={User} />
                </Route>
            </Router>
        )
    }
}

render(<App />, document.getElementById('root'));