import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';

/* Function Component */
const FriendsDetails = (props) => {
    return (
        /* Providing inline CSS property */
        <div style={{ margin: '1em', textAlign: 'center' }}>
            <img width='125' src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 20 }}>
                <div style={{ fontSize: '2em', fontWeight: 'bold', color: 'blue' }}>
                    {props.name}
                </div>
                <div style={{ fontWeight: 'bold' }}>{props.company}</div>

                <div style={{ fontWeight: 'bold' }}>{props.location}</div>
            </div>
        </div>
    )
}

/* Function Component */
const GitFriendsList = (props) => {

    return (
        <div>
            {
                props.friends.map(friend => <FriendsDetails key={friend.id} {...friend} />)}
        </div>
    )
}

/* Class Component */
class SearchFriend extends Component {
    state = { userName: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        /* Axios is a promised-based library that's similar to the Fetch API. It helps in making XMLHttpRequests from the browser */
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                    className="search"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github Username Required"
                />
                <button className='button' type="submit">Search Friend</button>
            </form>
        )
    }
}

/* Class Component */
class SearchResult extends Component {
    state = {
        friends: []
    }

    searchGitFriend = (searchInfo) => {
        this.setState(prevState => ({
            friends: prevState.friends.concat(searchInfo)
        }))
    }

    render() {
        return (
            <div
                className='background'
                style={{ margin: 'auto', width: '50%', border: '3px blue', padding: '10px', textAlign: 'center' }}>
                <h1>Search A Git Friend</h1>
                <SearchFriend onSubmit={this.searchGitFriend} />
                &nbsp; &nbsp; &nbsp;
                <GitFriendsList friends={this.state.friends} />
            </div>
        )
    }
}

export default SearchResult;