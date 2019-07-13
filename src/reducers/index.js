import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Way back into love' , duration: '4:05'},
        { title: 'That is it' , duration: '3:40'},
        { title: 'Heaven' , duration: '5:13'},
        { title: 'Great Days' , duration: '2:36'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});