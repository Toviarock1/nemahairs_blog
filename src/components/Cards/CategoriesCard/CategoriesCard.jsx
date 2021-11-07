import React from 'react'
import Categories from './Categories/Categories';

const CategoriesCard = (props) => {
    return (
        <div className="CardWrapper">
            <h3>Categories</h3>
            {
                props.categories.map((category) => {
                    return <Categories
                    category={category.title}
                    categoryLength={category.posts.length}
                    />
                })
            }
        </div>
    )
}

export default CategoriesCard;
