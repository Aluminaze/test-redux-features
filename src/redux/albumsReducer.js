import { DELETE_ALBUM, GET_ALBUMS } from "./types";

const initialState = {
  albums: [],
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: [...state.albums, ...action.payload],
      };

    case DELETE_ALBUM:
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.payload),
      };
    default:
      return state;
  }
};
