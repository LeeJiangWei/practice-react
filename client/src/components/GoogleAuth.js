import React from 'react';
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '875329279948-uf4nbktqam5gsnh4a63580hekjv1jeh0.apps.googleusercontent.com',
                scope: 'email'
            }); // if we don't use async await syntax, use .then(() => {...})
            this.auth = window.gapi.auth2.getAuthInstance();
            this.auth.isSignedIn.listen(this.onAuthChange); // set a listener to isSignIn function
            this.onAuthChange(this.auth.isSignedIn.get())
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    };

    onSignInClick = () => {
        this.auth.signIn()
    };

    onSignOutClick = () => {
        this.auth.signOut()
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)