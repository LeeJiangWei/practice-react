import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
    state = { lat: null, errMsg: '' };
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errMsg: '' };
    // };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errMsg: err.message})
        );
    }

    // helper function, avoiding conditional branches in render()
    renderContent() {
        if (this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>
        }
        else if (!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Loader text="Loading..."/>
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));
