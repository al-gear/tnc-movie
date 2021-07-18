import React, { useContext } from 'react';
import { MdSearch } from "react-icons/md"
import MainContext from '../context/context';

const NavBar = () => {
    const {setSearch}=useContext(MainContext);

    return (
        <div className="navbar">
            <div className="logo">
                <a href="/" ><h3><span>TNC</span> Movies</h3></a>
            </div>
            <div />
            <div className="search">
                 <div className="search-icon">
                    <MdSearch />
                </div>
                <input type="text"  onChange={e=>setSearch(e.target.value)} placeholder="Search movies..." />
                
            </div>
        </div>
    )
}

export default NavBar
