import { getTours } from "../slices/tours.slice";

export const getToursAction = ()=>{
    return async (dispatch)=>{
        const tours = await fetch(`http://localhost:3004/tours-data`).then(res=>res.json()).then(data=>data)
        dispatch(getTours(tours))
    }
}