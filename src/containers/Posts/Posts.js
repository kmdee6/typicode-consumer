import React, {Component} from 'react';
import {connect} from 'react-redux';
class Posts extends Component {
    render() {
        return (<p>Posts</p>);
    }

    componentDidMount() {
        this.props.callService('posts');
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
      callService: (type) => dispatch({type:type})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);