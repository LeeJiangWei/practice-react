// named export, when importing it, {} should be used.
// E.G.: import { selectSong } from "../actions"
// if using export default, {} is not needed.
export const selectSong = (song) => {
    //Action creator, returns an js object action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
