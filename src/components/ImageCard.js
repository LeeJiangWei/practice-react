import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {state:0};

        // create ref to access dom element
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight + 10;

        this.setState({spans:height})
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard