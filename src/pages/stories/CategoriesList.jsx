import React from 'react';
import {useDispatch} from "react-redux";
import {getStoriesByCategoryAction} from "../../redux/slices/stories.slice";


const CategoriesList = ({categories, isLoading, error, setActiveCategory, activeCategory}) => {

    const dispatch = useDispatch()

    const handleCategory = (category) => {
        if (category){
            setActiveCategory(category)
            dispatch(getStoriesByCategoryAction(category))
        }
    }

    return (
        <div className={"Categories"}>
            {
                error ? <p>{error}</p> : null
            }
            {
                <ul className={"CategoriesList"}>
                    {
                        categories && categories.map((category, index)=>{
                            return <li
                                key={index}
                                className={category === activeCategory ? "CategoriesListItem Active" : "CategoriesListItem"}
                                onClick={()=>handleCategory(category)}
                            >{category}</li>
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default CategoriesList;
