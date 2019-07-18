import React from 'react';

// defaultValue can be set as object, array, etc.
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({language:language});
    };

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange:this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context