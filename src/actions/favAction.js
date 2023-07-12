export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST"
export const NEXT_MOVIE = "NEXT_MOVIE"
export const PREVIOS_MOVIE = "PREVIOS_MOVIE"
export const addList= () =>{
    return ({type:ADD_LIST})
}
export const removeList= (id) =>{
    return ({type:REMOVE_LIST, payload: id})
}
export const nextMovie= () =>{
    return ({type:NEXT_MOVIE})
}
export const previousMovie= () =>{
    return ({type:PREVIOS_MOVIE})
}