import React from 'react';

const CatList = ({ catPics }) => {
    return (
        <div>
            {catPics.map((cats) => (
                <ul key={cats.id}>
                    <li>
                        <img src={cats.url} alt="cat" />
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default CatList;