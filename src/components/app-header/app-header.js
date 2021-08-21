import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Anton Irklii</h1>
            <h2>{allPosts} posts, of which liked  {liked}</h2>
        </div>
    )
}

export default AppHeader;