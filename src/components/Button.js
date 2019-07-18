import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === 'english'? 'Submit':'提交';
        // Alternative way to access context object: Pass a function fo Context.Provider as child
        return (
            <ColorContext.Consumer>
                { (color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            { ({language}) => language === 'english'? 'Submit':'提交' }
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        )
    }
}

export default Button