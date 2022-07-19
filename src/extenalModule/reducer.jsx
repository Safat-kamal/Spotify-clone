export const initialState = {
    user:null,
    playlists:[],
    relaxPlaylist:[],
    playing:false,
    item:null,
    token:null,
}

const reducer = (state,action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }

        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "FEEL_RELAX_PLAYLIST":
            return{
                ...state,
                relaxPlaylist: action.relaxPlaylist
            }

        default:
            return state
    }
}

export default reducer;