import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((personaje) => personaje.id !== action.payload)
            }

        case FILTER:
            const myFilter = state.allCharacters.filter((character) => character.gender === action.payload)
                    return{
                        ...state,
                        myFavorites: myFilter
                    }

        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === 'Ascendente'
                ? state.allCharacters.sort((a,b) => a.detailId - b.detailId)
                : state.allCharacters.sort((a,b) => b.detailId - a.detailId)
            }

        default:
            return {...state}
    }
};

export default reducer;