import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getStoriesByCategoryAction} from "../../redux/actions/storiesActions";

const CategoriesList = ({categories}) => {
    const [activeCategory, setActiveCategory] = useState(categories[0])
    const dispatch = useDispatch()

    const handleCategory = (category) => {
        setActiveCategory(category)
        dispatch(getStoriesByCategoryAction(category))
    }

    return (
        <div className={"Categories"}>
            <ul className={"CategoriesList"}>
                {
                    categories.map((category, index)=>{
                        return <li
                            key={index}
                            className={category === activeCategory ? "CategoriesListItem Active" : "CategoriesListItem"}
                            onClick={()=>handleCategory(category)}
                        >{category}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default CategoriesList;
