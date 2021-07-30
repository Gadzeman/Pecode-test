import React from 'react';
import "./Pagination.css"

const Pagination = ({page, setPage, info}) => {
    return (
        <div className={"pagination"}>
            <button style={{opacity: page === 1 && 0.6, pointerEvents: page === 1 && "none"}} onClick={() => setPage(page => page - 1)}>prev</button>
            <p>Page: {page} (Total: {info.pages})</p>
            <button style={{opacity: page === info.pages && 0.6, pointerEvents: page === info.pages && "none"}} onClick={() => setPage(page => page + 1)}>next</button>
        </div>
    );
};

export default Pagination;