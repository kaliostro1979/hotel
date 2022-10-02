import {getCategories, getStoriesByCategory} from "../slices/stories.slice";

export const getCategoriesAction = () => {
    return async (dispatch) =>{
        const categories = await fetch(`http://localhost:3004/categories`)
            .then(res=>res.json())
            .then(data=>data)
        dispatch(getCategories(categories))
    }
}

export const getStoriesByCategoryAction = (category) => {
    return async (dispatch) =>{
        const stories = await fetch(`http://localhost:3004/stories/${category}`)
            .then(res=>res.json())
            .then(data=>data)
        dispatch(getStoriesByCategory(stories.data))
    }
}
