import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';

const FriendsDetails = (props) => {
    return (
        <div style={{ margin: '1em', textAlign: 'center' }}>
            {/* using avatar_url = "https://avatars0.githubusercontent.com/u/15608874?v=4" 
    from https://api.github.com/users/merlin8thomas*/}
            <img width='75' src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

/* let friend = [
    {
        name: "Merlin Thomas",
        avatar_url: "https://avatars0.githubusercontent.com/u/15608874?v=4",
        company: "Synechron"
    }
] */

const GitFriendsList = (props) => {

    return (
        <div>
            {
                props.friends.map(friend => <FriendsDetails {...friend} />)}
        </div>
    )
}

class SearchFriend extends Component{
    state = {userName : ''};
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({userName : ''});
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type='text' 
            className = "search"
            value={this.state.userName}
            onChange={(event) => this.setState({userName: event.target.value})}
            placeholder="Github Username Required"
            />
            <button className='button' type="submit">Search Friend</button>
            </form>
        )
    }
}

class SearchResult extends Component{
    state = {
        friends : []
    }

    searchGitFriend = (searchInfo) => {
        this.setState(prevState => ({
            friends : prevState.friends.concat(searchInfo)
        }))
    }

    render(){
        return(
            <div
            className='background'
            style={{margin:'auto',width:'50%',border:'3px blue', padding:'10px', textAlign:'center'}}>
            <h1>Search A Git Friend</h1>
                <SearchFriend onSubmit={this.searchGitFriend} />
                &nbsp; &nbsp; &nbsp;
                <GitFriendsList friends={this.state.friends}/>
                </div>
        )
    }
}

export default SearchResult;