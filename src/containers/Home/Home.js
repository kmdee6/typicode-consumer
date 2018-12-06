import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import './Home.css';
import Albums from '../Albums/Albums';
import Comments from '../Comments/Comments';
import Posts from '../Posts/Posts';
import Todos from '../Todos/Todos';
import Users from '../Users/Users';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner/Spinner';

class Home extends Component {

    loader = () => {
        return <Spinner/>;
    };

    render() {
        return (
            <div>
                <div className="Header">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/comments">Comments</NavLink>
                    <NavLink to="/albums">Albums</NavLink>
                    <NavLink to="/todos">Todos</NavLink>
                    <NavLink to="/users">Users</NavLink>

                </div>
                <div className="Container">
                    <Switch>
                        <Route path="/" exact render={this.loader}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/comments" component={Comments}/>
                        <Route path="/albums" component={Albums}/>
                        <Route path="/todos" component={Todos}/>
                        <Route path="/users" component={Users}/>
                    </Switch>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {
      dispatchServiceCall : (type) => dispatch({type:type})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);