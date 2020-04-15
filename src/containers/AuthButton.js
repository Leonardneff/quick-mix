import React, { Component } from 'react';
import hash from "../hash";
import ChooseTopic from "./ChooseTopic";

export const authEndpoint = 'https://accounts.spotify.com/authorize';

var clientId = '938a8c474cd040468942f752655eb1c7'; 
var redirectUri = 'http://localhost:3000'; 

const scopes = [
    "user-read-private",
    "user-top-read",
    "user-library-modify",
    "playlist-modify-public"
];

class AuthButton extends Component {
    constructor () {
        super()
        this.state = {token:null}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        window.open(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`)
    }
    
    componentDidMount () {
        let _token = hash.access_token;
        _token ? this.setState ({token:_token}) : this.setState ({token:false})
    }

    render () {
        return (
            <div className="auth">
                {!this.state.token && (
                     <button className='auth-button' onClick={this.handleClick}>Login to Spotify</button>
                )}
                    {this.state.token && (
                    <ChooseTopic />
                )}
            </div>     
        )
    }
}

export default AuthButton;

