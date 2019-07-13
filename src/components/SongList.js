import React from 'react';
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map( song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    // state here is the state in redux store. When state is updated, this function will be call
    // console.log(state);
    return { songs: state.songs }
    // this returned value will be pass to SongList as props with name 'songs'
    // this.props === { song: state.songs }
};

// connect(): param1: pass state back as props     param2: action creators, also pass as props
export default connect(mapStateToProps, { selectSong: selectSong })(SongList)