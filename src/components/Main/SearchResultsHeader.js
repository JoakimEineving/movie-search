import React from 'react'
import {MotionHeader} from '../index'

const SearchResultsHeader = ({ searchValue }) => {
    return (
        <div>
            {!searchValue &&
                (localStorage.getItem("lastSearchResults") !== null &&
                    localStorage.getItem("lastSearchResults") !== "[]") && (
                    <MotionHeader text={"Last Search Results"} />
                )}
        </div>
    )
}
export default SearchResultsHeader