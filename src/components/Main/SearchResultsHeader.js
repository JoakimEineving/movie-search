import React from 'react'

const SearchResultsHeader = ({ searchValue }) => {
    return (
        <div>
            {!searchValue &&
                (localStorage.getItem("lastSearchResults") !== null &&
                    localStorage.getItem("lastSearchResults") !== "[]") && (
                    <h2>Previous Search</h2>
                )}
        </div>
    )
}
export default SearchResultsHeader