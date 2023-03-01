import React from 'react'
import {HeaderMotion} from '../index'

const SearchResultsHeader = ({ searchValue }) => {
    return (
        <div>
            {!searchValue &&
                (localStorage.getItem("lastSearchResults") !== null &&
                    localStorage.getItem("lastSearchResults") !== "[]") && (
                    <HeaderMotion text={"Last Search Results"} />
                )}
        </div>
    )
}
export default SearchResultsHeader