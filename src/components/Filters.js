import React from 'react'

const Filters = ({ handleCategory, handleSearch, handleSize, category, size }) => {
    return (
        <>

            <div className="filter">
                <div className="first elem" style={{ display: "flex" }}>
                    <div className="type">
                        <select type="text" value={category} onChange={handleCategory}>
                            <option value="" hidden>Category </option>
                    
                            <option>Hoodies</option>
                            <option>Sweaters</option>
                            <option>Shirts </option>
                            <option>T-Shirts</option>
                        </select>
                    </div>
                    <div className="size" style={{ marginLeft: "1.6rem" }}>
                        <select type="text" value={size} onChange={handleSize} >
                            <option value="" hidden>Size </option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>
                <div className="search_class">
                    <span className="search_span">Search:</span>
                    <input type="text" onChange={(e) => handleSearch(e.target.value)}></input>

                </div>




            </div>
        </>
    )
}

export default Filters
