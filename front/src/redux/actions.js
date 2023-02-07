import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

export const addFavorite = (personaje) => {
    return{
        type: ADD_FAVORITE,
        payload: personaje
    }
}

export const deleteFavorite = (id) => {
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) => {
    return{
        type: ORDER,
        payload: id
    }
}