import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {

    const history = useHistory();
    // we want the variable to keep track if the button has been clicked or not. It will be by default false - as nonclicked
    const [showSearch, setShowSearch] = useState
        (false);


    //event when the button "search Dates" is clicked. 
    var searchButtonClicked = () => {
        setShowSearch(!showSearch)
    }

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={searchButtonClicked}
                    className='banner__searchButton'
                    variant='outline'>Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of
                    getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => history.push('/search')}
                    variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    );
}

export default Banner