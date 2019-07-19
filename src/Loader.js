import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.text}</div>
        </div>
    )
};

// If props are not defined, default props will be used
Loader.defaultProps = {
    text:"Loading..."
};

export default Loader