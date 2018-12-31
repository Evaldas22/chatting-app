import React from "react";
import './Header.css';

const Header = ({user}) => {
    
    const {name, summary} = user;

    return(
        <header className='Header' >
            <h1 className='Header_name' >{name}</h1>
            <p>{summary}</p>
        </header>
    )
}

export default Header;